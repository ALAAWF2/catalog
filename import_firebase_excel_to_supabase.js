require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const xlsx = require('xlsx');

// Replace these with your Supabase Project URL and Service Role Key
const SUPABASE_URL = process.env.SUPABASE_URL || 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SUPABASE_SERVICE_ROLE_KEY';

if (SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL' || SUPABASE_SERVICE_ROLE_KEY === 'YOUR_SUPABASE_SERVICE_ROLE_KEY') {
    console.error('❌ الرجاء وضع رابط مشروعك ومفتاح Service Role Key السري من Supabase في هذا الكود قبل التشغيل.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

async function main() {
    try {
        console.log('1. قراءة الفروع من نظام Firebase القديم...');
        const firebaseData = fs.readFileSync('./firebase_users_export.json', 'utf8');
        const firebaseUsers = JSON.parse(firebaseData);
        
        console.log('2. قراءة كلمات المرور الأصلية من ملف الإكسيل...');
        const workbook = xlsx.readFile('./usersssss-جدول البضاعة.xlsx');
        const sheetName = workbook.SheetNames[0];
        const excelRows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        
        // Create a map of email to password
        const passwordMap = {};
        for (const row of excelRows) {
            if (row.Email && row.Password) {
                passwordMap[row.Email.toLowerCase().trim()] = row.Password.toString().trim();
            }
        }

        console.log(`\nتم إيجاد ${Object.keys(passwordMap).length} كلمة مرور في ملف الإكسيل.`);
        console.log(`البدء بإنشاء ${firebaseUsers.length} فرع في نظام Supabase الجديد...\n`);

        let successCount = 0;
        let errorCount = 0;

        for (const user of firebaseUsers) {
             const email = user.email.toLowerCase().trim();
             
             // Check if we have their password from Excel, otherwise give default
             const isMissing = !passwordMap[email];
             const password = isMissing ? 'Orange_2026_User!' : passwordMap[email];
             
             if (isMissing) {
                console.log(`⚠️ [تنبيه] الفرع (${email}) غير موجود في الإكسيل. سيتم تعيين كلمة مرور افتراضية له.`);
             }

             const { data, error } = await supabase.auth.admin.createUser({
                 email: email,
                 password: password,
                 email_confirm: true, // Auto-confirm email
                 user_metadata: {
                     old_firebase_uid: user.uid,
                     display_name: user.displayName || email.split('@')[0],
                     imported: true
                 }
             });

             if (error) {
                 if (error.message.includes('already exists')) {
                     console.log(`✅ الحساب موجود مسبقاً: ${email}`);
                     successCount++;
                 } else {
                     console.error(`❌ خطأ في الفرع ${email}:`, error.message);
                     errorCount++;
                 }
             } else {
                 console.log(`✅ تمت الإضافة بنجاح: ${email} -> كلمة المرور: [${password}]`);
                 successCount++;
             }
             
             // Avoid hitting rate limits
             await new Promise(resolve => setTimeout(resolve, 250));
        }

        console.log('\n=======================================');
        console.log('🎉 تمت عملية استيراد الفروع بنجاح!');
        console.log(`✅ نجاح: ${successCount} فرع`);
        console.log(`❌ فشل: ${errorCount} فرع`);
        console.log('=======================================');

    } catch (err) {
        console.error('❌ حدث خطأ:', err);
    }
}

main();
