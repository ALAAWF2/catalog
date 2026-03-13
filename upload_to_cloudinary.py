import os
import time
import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

# ==========================================
# إعدادات الحساب (توضع هنا أو تقرأ من ملف/بيئة)
# ==========================================
# ضع مسار مجلد الصور الخاص بك هنا
IMAGES_FOLDER = r"C:\Users\ALAA-ORANGE\Desktop\catalog\images"

# ضع بيانات حسابك هنا (يفضل ألا تشاركها مع أحد)
CLOUD_NAME = "dsp8ysswh"
API_KEY = "395282767158861" 
# طلب الإدخال من المستخدم بدلاً من كتابته في الكود لتجنب كشفه
API_SECRET = input("Please enter your Cloudinary API Secret: ").strip()

cloudinary.config( 
    cloud_name = CLOUD_NAME, 
    api_key = API_KEY, 
    api_secret = API_SECRET,
    secure=True
)

def upload_catalog_images():
    if not os.path.exists(IMAGES_FOLDER):
        print(f"Error: Factor folder '{IMAGES_FOLDER}' not found.")
        return

    # جمع كل ملفات الصور في المجلد
    image_files = [f for f in os.listdir(IMAGES_FOLDER) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
    print(f"Found {len(image_files)} images to upload.")

    success_count = 0
    error_count = 0

    for i, filename in enumerate(image_files):
        file_path = os.path.join(IMAGES_FOLDER, filename)
        
        # استخراج اسم الصورة بدون الامتداد ليكون الـ Public ID
        # مثلا "12345.jpg" يصبح "12345"
        public_id = os.path.splitext(filename)[0]
        
        print(f"[{i+1}/{len(image_files)}] Uploading {filename} as '{public_id}'...")
        
        try:
            # رفع الصورة
            # use_filename=True: اختياري، يخبرهم باستخدام اسم الملف لو لم نعطهم public_id
            # unique_filename=False: لمنع إضافة رموز عشوائية لاسم الصورة
            # overwrite=True: لو الصورة مرفوعة مسبقاً بنفس الاسم يحدّثها
            response = cloudinary.uploader.upload(
                file_path,
                public_id=public_id,
                unique_filename=False,
                overwrite=True
            )
            print(f"  ✓ Success! URL: {response.get('secure_url')}")
            success_count += 1
            
        except Exception as e:
            print(f"  ✗ Failed to upload {filename}: {e}")
            error_count += 1
            
        # إضافة توقف بسيط (ثانية واحدة) بين كل رفع لتجنب حظر الملقم (Rate Limit)
        time.sleep(1)

    print("\n" + "="*40)
    print("Upload Summary:")
    print(f"Total attempted: {len(image_files)}")
    print(f"Successful: {success_count}")
    print(f"Failed: {error_count}")
    print("="*40)

if __name__ == "__main__":
    upload_catalog_images()
