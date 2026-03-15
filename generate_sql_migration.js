const fs = require('fs');

try {
    const users = JSON.parse(fs.readFileSync('supabase_users.json', 'utf8'));
    const orders = JSON.parse(fs.readFileSync('supabase_orders.json', 'utf8'));

    let sql = `-- 1. CREATE TABLES\n`;
    sql += `CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    mall TEXT,
    warehouse TEXT,
    role TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);\n\n`;

    sql += `CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    mall TEXT,
    warehouse TEXT,
    has_extras BOOLEAN,
    items JSONB DEFAULT '[]'::jsonb,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);\n\n`;

    sql += `-- 2. INSERT USERS (PROFILES)\n`;
    users.forEach(u => {
        const mall = u.mall ? u.mall.replace(/'/g, "''") : '';
        const warehouse = u.warehouse ? u.warehouse.replace(/'/g, "''") : '';
        const email = u.email ? u.email.replace(/'/g, "''") : '';
        const role = u.role ? u.role.replace(/'/g, "''") : 'user';
        
        sql += `INSERT INTO public.profiles (id, email, mall, warehouse, role) 
VALUES ('${u.id}', '${email}', '${mall}', '${warehouse}', '${role}') 
ON CONFLICT (id) DO UPDATE SET mall = EXCLUDED.mall, warehouse = EXCLUDED.warehouse;\n`;
    });

    sql += `\n-- 3. INSERT ORDERS\n`;
    orders.forEach(o => {
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
        
        sql += `INSERT INTO public.orders (id, user_id, mall, warehouse, has_extras, items, created_at) 
VALUES ('${o.id}', ${user_id}, '${mall}', '${warehouse}', ${has_extras}, '${items}'::jsonb, ${created_at}) 
ON CONFLICT (id) DO NOTHING;\n`;
    });

    fs.writeFileSync('supabase_migration.sql', sql);
    console.log('Successfully generated supabase_migration.sql');

} catch (error) {
    console.error('Error generating SQL:', error);
}
