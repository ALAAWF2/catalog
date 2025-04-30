import subprocess
import os

# مجلد المشروع
project_path = r"C:\Users\Orange\Desktop\جدول البضاعة\catalog"
os.chdir(project_path)

try:
    # إضافة الملف الجديد
    subprocess.run(["git", "add", "products.js"], check=True)

    # التحقق من وجود تغييرات في staging (بما فيها الملفات الجديدة)
    result = subprocess.run(["git", "diff", "--cached", "--exit-code"])
    if result.returncode != 0:
        subprocess.run(["git", "commit", "-m", "🔄 تحديث المنتجات"], check=True)
        subprocess.run(["git", "push", "origin", "main"], check=True)
        print("✅ تم رفع الملف إلى GitHub بنجاح!")
    else:
        print("ℹ️ لا توجد تغييرات لرفعها.")
except subprocess.CalledProcessError as e:
    print(f"❌ حدث خطأ أثناء تنفيذ Git: {e}")
