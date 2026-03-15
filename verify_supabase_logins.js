require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const xlsx = require('xlsx');

const SUPABASE_URL = process.env.SUPABASE_URL || 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SUPABASE_SERVICE_ROLE_KEY';

if (SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL' || SUPABASE_SERVICE_ROLE_KEY === 'YOUR_SUPABASE_SERVICE_ROLE_KEY') {
    console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
    process.exit(1);
}

// Note: For sign-in testing, a standard client is used. 
// Even with service_role, signInWithPassword works unless restricted by policies.
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function verifyLogins() {
    try {
        console.log('🔍 البدء بعملية التحقق من صحة كلمات المرور في Supabase...');
        
        // 1. Get user emails from Firebase export
        const firebaseData = fs.readFileSync('./firebase_users_export.json', 'utf8');
        const firebaseUsers = JSON.parse(firebaseData);
        
        // 2. Map passwords from Excel
        const workbook = xlsx.readFile('./usersssss-جدول البضاعة.xlsx');
        const sheetName = workbook.SheetNames[0];
        const excelRows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        
        const passwordMap = {};
        for (const row of excelRows) {
            if (row.Email && row.Password) {
                passwordMap[row.Email.toLowerCase().trim()] = row.Password.toString().trim();
            }
        }

        // Special 3 users password
        const specialPassword = 'Orange@2026';
        const specialUsers = ['alrabie@orangebedbath.com', 'malgha@orangebedbath.com', 'lavanda.park@orangebedbath.com'];

        console.log(`بدء اختبار الدخول لـ ${firebaseUsers.length} مستخدم...\n`);

        let successCount = 0;
        let failCount = 0;

        for (const user of firebaseUsers) {
            const email = user.email.toLowerCase().trim();
            
            let password;
            if (specialUsers.includes(email)) {
                password = specialPassword;
            } else {
                password = passwordMap[email];
            }

            if (!password) {
                console.log(`❌ [تنبيه] لا توجد كلمة مرور مسجلة لهذا الإيميل: ${email}`);
                failCount++;
                continue;
            }

            // Attempt Sign In
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                console.error(`❌ فشل الدخول لـ ${email}: ${error.message}`);
                failCount++;
            } else {
                console.log(`✅ تم التحقق بنجاح: ${email}`);
                successCount++;
                // Sign out immediately to clean up session if any
                await supabase.auth.signOut();
            }

            // Small delay to avoid triggering rate limits
            await new Promise(resolve => setTimeout(resolve, 300));
        }

        console.log('\n=======================================');
        console.log('📊 تقرير التحقق النهائي:');
        console.log(`✅ حسابات صحيحة: ${successCount}`);
        console.log(`❌ حسابات فشل دخولها: ${failCount}`);
        console.log('=======================================');
        
        if (failCount === 0) {
            console.log('🎉 جميع فروعك تعمل بكلمات مرورها الصحيحة بنسبة 100%!');
        }

    } catch (err) {
        console.error('❌ حدث خطأ غير متوقع:', err.message);
    }
}

verifyLogins();
