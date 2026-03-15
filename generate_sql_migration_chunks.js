const fs = require('fs');

try {
    const users = JSON.parse(fs.readFileSync('supabase_users.json', 'utf8'));
    const orders = JSON.parse(fs.readFileSync('supabase_orders.json', 'utf8'));

    // Part 0: Schema and Profiles
    let sql0 = `-- 1. CREATE TABLES\n`;
    
    // Changed id to TEXT and REMOVED references to auth.users to avoid UUID constraint errors
    sql0 += `CREATE TABLE IF NOT EXISTS public.profiles (
    id TEXT PRIMARY KEY,
    email TEXT,
    mall TEXT,
    warehouse TEXT,
    role TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);\n\n`;

    // Changed user_id to TEXT to match profiles.id 
    sql0 += `CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    user_id TEXT REFERENCES public.profiles(id) ON DELETE SET NULL,
    mall TEXT,
    warehouse TEXT,
    has_extras BOOLEAN,
    items JSONB DEFAULT '[]'::jsonb,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);\n\n`;

    sql0 += `-- 2. INSERT USERS (PROFILES)\n`;
    users.forEach(u => {
        const mall = u.mall ? u.mall.replace(/'/g, "''") : '';
        const warehouse = u.warehouse ? u.warehouse.replace(/'/g, "''") : '';
        const email = u.email ? u.email.replace(/'/g, "''") : '';
        const role = u.role ? u.role.replace(/'/g, "''") : 'user';
        
        sql0 += `INSERT INTO public.profiles (id, email, mall, warehouse, role) 
VALUES ('${u.id}', '${email}', '${mall}', '${warehouse}', '${role}') 
ON CONFLICT (id) DO UPDATE SET mall = EXCLUDED.mall, warehouse = EXCLUDED.warehouse;\n`;
    });

    fs.writeFileSync('0_schema_and_profiles.sql', sql0);
    console.log('Successfully generated 0_schema_and_profiles.sql');

    // Part 1 onwards: Orders in chunks of 50
    const chunkSize = 50; 
    for (let i = 0; i < orders.length; i += chunkSize) {
        const chunk = orders.slice(i, i + chunkSize);
        
        // Use 1-based index for filename: 1, 2, 3, 4, 5...
        const partNum = Math.floor(i / chunkSize) + 1;
        
        let sqlChunk = `-- 3. INSERT ORDERS (Part ${partNum})\n`;
        chunk.forEach(o => {
            const mall = o.mall ? o.mall.replace(/'/g, "''") : '';
            const warehouse = o.warehouse ? o.warehouse.replace(/'/g, "''") : '';
            const has_extras = o.hasExtras === true ? 'TRUE' : 'FALSE';
            const items = JSON.stringify(o.orders || []).replace(/'/g, "''");
            
            let created_at = 'NOW()';
            if (o.timestamp) {
                 created_at = `'${o.timestamp}'`;
            }
            
            let user_id = 'NULL';
            if (o.userId) {
                 user_id = `'${o.userId}'`;
            }
            
            sqlChunk += `INSERT INTO public.orders (id, user_id, mall, warehouse, has_extras, items, created_at) 
VALUES ('${o.id}', ${user_id}, '${mall}', '${warehouse}', ${has_extras}, '${items}'::jsonb, ${created_at}) 
ON CONFLICT (id) DO NOTHING;\n`;
        });
        
        const fileName = `${partNum}_orders_part.sql`;
        fs.writeFileSync(fileName, sqlChunk);
        console.log(`Successfully generated ${fileName}`);
    }

} catch (error) {
    console.error('Error generating SQL:', error);
}
