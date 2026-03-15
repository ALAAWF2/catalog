require('dotenv').config();
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const DATABASE_URL = process.env.DATABASE_URL || 'YOUR_POSTGRES_CONNECTION_STRING';

if (DATABASE_URL === 'YOUR_POSTGRES_CONNECTION_STRING') {
    console.error('Missing DATABASE_URL in .env');
    console.error('Add your Supabase Postgres connection string and run again.');
    process.exit(1);
}

const PROGRESS_FILE = path.join(__dirname, 'supabase_import_progress.json');
const ERROR_LOG_FILE = path.join(__dirname, 'supabase_import_errors.log');
const args = process.argv.slice(2);
const resetProgress = args.includes('--reset-progress');
const stopOnError = args.includes('--stop-on-error');

let client = null;

function nowIso() {
    return new Date().toISOString();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createClient() {
    return new Client({
        connectionString: DATABASE_URL,
        keepAlive: true,
        statement_timeout: 0,
        query_timeout: 0,
        connectionTimeoutMillis: 15000
    });
}

async function connectClient() {
    if (client) {
        try {
            await client.end();
        } catch (_) {}
    }

    client = createClient();
    await client.connect();
}

function isReconnectableError(err) {
    if (!err) return false;
    const message = String(err.message || '').toLowerCase();
    const code = String(err.code || '').toUpperCase();

    if (['57P01', '57P02', '57P03', '08000', '08003', '08006', '08001', 'ECONNRESET', 'ETIMEDOUT', 'EPIPE'].includes(code)) {
        return true;
    }

    return (
        message.includes('connection terminated') ||
        message.includes('terminating connection') ||
        message.includes('connection ended unexpectedly') ||
        message.includes('connection not open') ||
        message.includes('socket hang up') ||
        message.includes('read etimedout')
    );
}

async function queryWithReconnect(sql, context, maxRetries = 3) {
    let attempt = 0;

    while (true) {
        try {
            if (!client) {
                await connectClient();
            }
            return await client.query(sql);
        } catch (err) {
            if (!isReconnectableError(err) || attempt >= maxRetries) {
                throw err;
            }

            attempt += 1;
            const msg = `[${context}] reconnectable error (attempt ${attempt}/${maxRetries}): ${err.message}`;
            console.error(`WARNING: ${msg}`);
            appendErrorLog(msg);

            await sleep(1500 * attempt);
            await connectClient();
        }
    }
}

function readProgress() {
    if (!fs.existsSync(PROGRESS_FILE)) {
        return {
            completedFiles: {},
            failedFiles: {},
            lastRunAt: null
        };
    }

    try {
        return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    } catch (err) {
        console.error('Progress file is invalid JSON. Starting fresh progress.');
        return {
            completedFiles: {},
            failedFiles: {},
            lastRunAt: null
        };
    }
}

function writeProgress(progress) {
    progress.lastRunAt = nowIso();
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2), 'utf8');
}

function appendErrorLog(message) {
    fs.appendFileSync(ERROR_LOG_FILE, `${nowIso()} ${message}\n`, 'utf8');
}

function getSqlFiles() {
    const files = fs.readdirSync(__dirname);
    const orderFiles = files
        .filter(f => f.endsWith('_orders_part.sql'))
        .sort((a, b) => {
            const numA = parseInt(a.split('_')[0], 10);
            const numB = parseInt(b.split('_')[0], 10);
            return numA - numB;
        });

    const schemaFile = '0_schema_and_profiles.sql';
    if (files.includes(schemaFile)) {
        return [schemaFile, ...orderFiles];
    }

    return orderFiles;
}

async function runSqlFileBulk(filePath) {
    const sql = fs.readFileSync(filePath, 'utf8');
    await queryWithReconnect(sql, `${path.basename(filePath)} | bulk`);
}

function splitSqlStatements(sql) {
    const statements = [];
    let current = '';
    let i = 0;
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let inLineComment = false;
    let inBlockComment = false;
    let dollarTag = null;

    while (i < sql.length) {
        const ch = sql[i];
        const next = sql[i + 1];

        if (inLineComment) {
            current += ch;
            if (ch === '\n') inLineComment = false;
            i++;
            continue;
        }

        if (inBlockComment) {
            current += ch;
            if (ch === '*' && next === '/') {
                current += next;
                i += 2;
                inBlockComment = false;
                continue;
            }
            i++;
            continue;
        }

        if (!inSingleQuote && !inDoubleQuote && !dollarTag) {
            if (ch === '-' && next === '-') {
                inLineComment = true;
                current += ch + next;
                i += 2;
                continue;
            }

            if (ch === '/' && next === '*') {
                inBlockComment = true;
                current += ch + next;
                i += 2;
                continue;
            }

            if (ch === '$') {
                const rest = sql.slice(i);
                const match = rest.match(/^\$[A-Za-z_0-9]*\$/);
                if (match) {
                    dollarTag = match[0];
                    current += dollarTag;
                    i += dollarTag.length;
                    continue;
                }
            }
        } else if (dollarTag) {
            if (sql.startsWith(dollarTag, i)) {
                current += dollarTag;
                i += dollarTag.length;
                dollarTag = null;
                continue;
            }
            current += ch;
            i++;
            continue;
        }

        if (!inDoubleQuote && ch === '\'' && !dollarTag) {
            if (inSingleQuote && next === '\'') {
                current += '\'\'';
                i += 2;
                continue;
            }
            inSingleQuote = !inSingleQuote;
            current += ch;
            i++;
            continue;
        }

        if (!inSingleQuote && ch === '"' && !dollarTag) {
            inDoubleQuote = !inDoubleQuote;
            current += ch;
            i++;
            continue;
        }

        if (!inSingleQuote && !inDoubleQuote && !dollarTag && ch === ';') {
            const stmt = `${current};`.trim();
            if (stmt && stmt !== ';') statements.push(stmt);
            current = '';
            i++;
            continue;
        }

        current += ch;
        i++;
    }

    const tail = current.trim();
    if (tail) statements.push(tail);

    return statements;
}

async function runSqlFileStatementByStatement(filePath) {
    const sql = fs.readFileSync(filePath, 'utf8');
    const statements = splitSqlStatements(sql);
    let okCount = 0;
    let failCount = 0;

    for (let i = 0; i < statements.length; i++) {
        const statement = statements[i];
        const context = `${path.basename(filePath)} | stmt ${i + 1}/${statements.length}`;

        try {
            await queryWithReconnect(statement, context);
            okCount++;
        } catch (err) {
            failCount++;
            const oneLineStatement = statement.replace(/\s+/g, ' ').slice(0, 220);
            const msg = `[${context}] ${err.message} | SQL: ${oneLineStatement}`;
            console.error(`ERROR: ${msg}`);
            appendErrorLog(msg);

            if (stopOnError) {
                throw err;
            }
        }
    }

    return { okCount, failCount, total: statements.length };
}

async function main() {
    if (resetProgress) {
        if (fs.existsSync(PROGRESS_FILE)) fs.unlinkSync(PROGRESS_FILE);
        if (fs.existsSync(ERROR_LOG_FILE)) fs.unlinkSync(ERROR_LOG_FILE);
        console.log('Progress and error logs were reset.');
    }

    const progress = readProgress();

    try {
        console.log('Connecting to database...');
        await connectClient();
        console.log('Connected.');

        const sqlFiles = getSqlFiles();
        console.log(`Found ${sqlFiles.length} SQL files.`);
        console.log('Starting resumable import...');

        let successCount = 0;
        let bulkFailureCount = 0;
        let skippedCount = 0;

        for (const file of sqlFiles) {
            if (progress.completedFiles[file]) {
                skippedCount++;
                console.log(`Skipping already completed file: ${file}`);
                continue;
            }

            const fullPath = path.join(__dirname, file);
            console.log(`Running ${file} (bulk mode)...`);

            try {
                await runSqlFileBulk(fullPath);
                console.log(`Success (bulk): ${file}`);
                progress.completedFiles[file] = {
                    completedAt: nowIso(),
                    mode: 'bulk',
                    failedStatements: 0
                };
                delete progress.failedFiles[file];
                writeProgress(progress);
                successCount++;
            } catch (err) {
                bulkFailureCount++;
                const bulkMsg = `[${file}] Bulk execution failed: ${err.message}`;
                console.error(`WARNING: ${bulkMsg}`);
                appendErrorLog(bulkMsg);

                console.log(`Falling back to statement-by-statement mode for ${file}...`);
                const result = await runSqlFileStatementByStatement(fullPath);

                if (result.failCount === 0) {
                    console.log(`Success (fallback): ${file}`);
                    progress.completedFiles[file] = {
                        completedAt: nowIso(),
                        mode: 'statement-by-statement',
                        failedStatements: 0
                    };
                    delete progress.failedFiles[file];
                    writeProgress(progress);
                    successCount++;
                    continue;
                }

                console.log(`Completed ${file} with ${result.failCount} bad statement(s); remaining statements were imported.`);
                progress.completedFiles[file] = {
                    completedAt: nowIso(),
                    mode: 'statement-by-statement',
                    failedStatements: result.failCount
                };
                progress.failedFiles[file] = {
                    failedAt: nowIso(),
                    failedStatements: result.failCount,
                    totalStatements: result.total
                };
                writeProgress(progress);

                if (stopOnError) {
                    console.error('Stopping because --stop-on-error is enabled.');
                    break;
                }
            }
        }

        console.log('\n================ Import Summary ================');
        console.log(`Files completed in this run: ${successCount}`);
        console.log(`Files with bulk failure: ${bulkFailureCount}`);
        console.log(`Files skipped from progress: ${skippedCount}`);
        console.log(`Progress file: ${PROGRESS_FILE}`);
        console.log(`Error log: ${ERROR_LOG_FILE}`);
        console.log('================================================');
    } catch (err) {
        console.error('System error:', err.message);
    } finally {
        if (client) {
            try {
                await client.end();
            } catch (_) {}
        }
        console.log('Database connection closed.');
    }
}

main();
