import json
import pandas as pd
from pathlib import Path
import os

# Configuration
BASE_DIR = Path(__file__).resolve().parent

PRODUCTS_FILE = BASE_DIR / "products.json"
IMAGES_DIR = BASE_DIR / "images"
OUTPUT_FILE = BASE_DIR / "products_images_report.xlsx"

IMAGE_EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif")

def check_image_exists(code):
    # Check for exact match with extensions
    for ext in IMAGE_EXTENSIONS:
        img_path = IMAGES_DIR / f"{code}{ext}"
        if img_path.exists():
            return img_path
            
    # Try with case insensitivity if not found (e.g. Code.JPG)
    return None

def main():
    if not PRODUCTS_FILE.exists():
        print(f"Error: {PRODUCTS_FILE} not found. Please run the catalog generator script first.")
        return

    print(f"Loading items from {PRODUCTS_FILE}...")
    try:
        with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
            products = json.load(f)
    except Exception as e:
        print(f"Error loading products.json: {e}")
        return

# Optimization: Load all image names into a set for O(1) lookup
    print("Caching image directory...")
    # Store lowercased filenames to handle case-insensitivity on Windows logic emulation
    # We use a dict to map lower -> actual_name if we wanted to preserve case, 
    # but original script returned constructed path. We will stick to set for existence check.
    try:
        available_images = {f.lower() for f in os.listdir(IMAGES_DIR)}
    except Exception as e:
        print(f"Error reading image directory: {e}")
        available_images = set()

    def check_image_exists_optimized(code):
        # Check for exact match with extensions using cached set
        for ext in IMAGE_EXTENSIONS:
            target_file = f"{code}{ext}"
            if target_file.lower() in available_images:
                return IMAGES_DIR / target_file
        return None

    report_data = [] # Restore missing initialization

    for p in products:
        stock = p.get("stock", 0)
        # Filter: Only include items with stock > 0
        if stock <= 0:
             continue

        code = str(p.get("code", "")).strip()
        name = p.get("name", "")
        category = p.get("category", "")
        
        # Determine Category Status
        category_status = category if category and category.lower() != "uncategorized" else "MISSING/UNCATEGORIZED"
        
        # Check Image
        # Images can be named after code, alias, or gofrugal_code
        found_path = None
        # Candidates to check in order of preference (or just check all)
        raw_candidates = [code, p.get("alias", ""), p.get("gofrugal_code", "")]
        # Filter out empty candidates
        candidates = []
        for c in raw_candidates:
            s = str(c).strip()
            
            # Pattern: 22xxxxx -> 2xxxxx
            if len(s) == 7 and s.startswith("22"):
                candidates.append(s[1:])
            
            # Pattern: 4xxxxx -> xxxxx OR 44xxxxx -> 4xxxxx / xxxxx
            if s.startswith("4"):
                candidates.append(s[1:])
                if s.startswith("44"):
                    candidates.append(s[2:])

            if not s:
                continue
            candidates.append(s)
            
            # Special handling for "KIT-" prefix
            if s.upper().startswith("KIT-"):
                # Add version without "KIT-" (e.g. KIT-123 -> 123)
                candidates.append(s[4:])
        
        for cand in candidates:
            # Use Optimized Check
            match = check_image_exists_optimized(cand)
            if match:
                found_path = match
                break

        report_data.append({
            "Item Name": name,
            "Barcode (Code)": code,
            "Alias": p.get("alias", ""),
            "Gofrugal Code": p.get("gofrugal_code", ""),
            "Category": category_status,
            "Stock": stock,
            "Image Available": "YES" if found_path else "NO",
            "Matched Image Name": found_path.name if found_path else "",
            "Image Path": str(found_path) if found_path else "" 
        })

    df = pd.DataFrame(report_data)

    print(f"Saving report to {OUTPUT_FILE}...")
    try:
        df.to_excel(OUTPUT_FILE, index=False)
        print("Report generated successfully.")
    except Exception as e:
        print(f"Error saving Excel file: {e}")

if __name__ == "__main__":
    main()
