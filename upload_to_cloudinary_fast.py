import os
import time
import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url
from concurrent.futures import ThreadPoolExecutor

# ==========================================
# إعدادات الحساب
# ==========================================
IMAGES_FOLDER = r"C:\Users\ALAA-ORANGE\Desktop\catalog\images"

CLOUD_NAME = "dsp8ysswh"
API_KEY = "395282767158861" 
API_SECRET = input("Please enter your Cloudinary API Secret: ").strip()

cloudinary.config( 
    cloud_name = CLOUD_NAME, 
    api_key = API_KEY, 
    api_secret = API_SECRET,
    secure=True
)

def upload_single_image(args):
    index, total, filename, file_path = args
    public_id = os.path.splitext(filename)[0]
    
    print(f"[{index}/{total}] Uploading '{public_id}'...")
    
    try:
        response = cloudinary.uploader.upload(
            file_path,
            public_id=public_id,
            unique_filename=False,
            overwrite=True
        )
        print(f"  ✓ Success: {public_id}")
        return True
    except Exception as e:
        print(f"  ✗ Failed: {public_id} - Error: {e}")
        return False

def upload_catalog_images_fast():
    if not os.path.exists(IMAGES_FOLDER):
        print(f"Error: Factor folder '{IMAGES_FOLDER}' not found.")
        return

    # جمع كل ملفات الصور
    image_files = [f for f in os.listdir(IMAGES_FOLDER) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
    total_images = len(image_files)
    print(f"Found {total_images} images to upload.")

    # تجهيز المهام
    tasks = []
    for i, filename in enumerate(image_files):
        file_path = os.path.join(IMAGES_FOLDER, filename)
        tasks.append((i + 1, total_images, filename, file_path))

    success_count = 0
    error_count = 0
    
    start_time = time.time()

    # استخدام ThreadPoolExecutor لرفع 20 صورة في نفس الوقت
    # يمكنك تقليل العدد إلى 10 إذا واجهت رسائل خطأ تفيد بـ Rate Limit
    max_workers = 20 
    print(f"\n🚀 Starting fast upload using {max_workers} parallel workers...\n")

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        results = executor.map(upload_single_image, tasks)
        
        for was_successful in results:
            if was_successful:
                success_count += 1
            else:
                error_count += 1

    end_time = time.time()
    elapsed_minutes = (end_time - start_time) / 60

    print("\n" + "="*40)
    print("Upload Summary:")
    print(f"Total time taken: {elapsed_minutes:.2f} minutes")
    print(f"Total attempted: {total_images}")
    print(f"Successful: {success_count}")
    print(f"Failed: {error_count}")
    print("="*40)

if __name__ == "__main__":
    upload_catalog_images_fast()
