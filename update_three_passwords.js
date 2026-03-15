require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SUPABASE_SERVICE_ROLE_KEY';

if (SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL' || SUPABASE_SERVICE_ROLE_KEY === 'YOUR_SUPABASE_SERVICE_ROLE_KEY') {
    console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const usersToUpdate = [
    { email: 'alrabie@orangebedbath.com', newPassword: 'Orange@2026' },
    { email: 'malgha@orangebedbath.com', newPassword: 'Orange@2026' },
    { email: 'lavanda.park@orangebedbath.com', newPassword: 'Orange@2026' }
];

async function updatePasswords() {
    console.log('🔄 البدء بتحديث كلمات السر للفروع الثلاثة...');
    
    for (const user of usersToUpdate) {
        // Find user by email
        const { data: { users }, error: findError } = await supabase.auth.admin.listUsers();
        if (findError) {
             console.error('❌ خطأ في جلب المستخدمين:', findError.message);
             return;
        }

        const targetUser = users.find(u => u.email === user.email);

        if (targetUser) {
            const { error: updateError } = await supabase.auth.admin.updateUserById(
                targetUser.id,
                { password: user.newPassword }
            );

            if (updateError) console.error(`❌ فشل تحديث ${user.email}:`, updateError.message);
            else console.log(`✅ تم تحديث كلمة سر ${user.email} بنجاح إلى [${user.newPassword}]`);
        } else {
            console.error(`❌ لم يتم العثور على المستخدم: ${user.email}`);
        }
    }
    console.log('✨ انتهت العملية.');
}

updatePasswords();
