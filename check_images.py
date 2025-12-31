import json
from pathlib import Path
import pandas as pd

# =========================
# PATHS
# =========================
BASE_DIR = Path(__file__).resolve().parent
PRODUCTS_FILE = BASE_DIR / "products.json"
IMAGES_DIR = BASE_DIR / "images"
OUTPUT_FILE = BASE_DIR / "missing_images_report.xlsx"

def main():
    # =========================
    # LOAD PRODUCTS
    # =========================
    if not PRODUCTS_FILE.exists():
        print(f"❌ products.json not found: {PRODUCTS_FILE}")
        return

    try:
        with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
            products = json.load(f)
    except Exception as e:
        print(f"❌ Error loading products.json: {e}")
        return

    # =========================
    # LOAD IMAGES
    # =========================
    if not IMAGES_DIR.exists():
        print(f"❌ images folder not found: {IMAGES_DIR}")
        return

    existing_images = {
        f.name.lower()
        for f in IMAGES_DIR.iterdir()
        if f.is_file()
    }

    print(f"🔍 Checking {len(products)} products against {len(existing_images)} images...")

    missing_products = []

    # =========================
    # CHECK PRODUCTS
    # =========================
    for p in products:
        code = str(p.get("code", "")).strip()
        gofrugal = str(p.get("gofrugal_code", "")).strip()
        alias = str(p.get("alias", "")).strip()

        candidates = []

        if code:
            candidates += [f"{code}.jpg", f"{code}.jpeg"]

        if gofrugal and gofrugal.lower() != "nan":
            candidates += [f"{gofrugal}.jpg", f"{gofrugal}.jpeg"]

        if alias and alias.lower() != "nan":
            candidates += [f"{alias}.jpg", f"{alias}.jpeg"]

        has_image = any(c.lower() in existing_images for c in candidates)

        if not has_image:
            missing_products.append({
                "code": code,
                "name": p.get("name", ""),
                "alias": alias,
                "gofrugal_code": gofrugal,
                "category": p.get("category", "")
            })

    # =========================
    # EXPORT TO EXCEL
    # =========================
    df = pd.DataFrame(missing_products)

    if df.empty:
        print("🎉 All products have images. No Excel file created.")
        return

    df.to_excel(OUTPUT_FILE, index=False)

    # =========================
    # SUMMARY
    # =========================
    print("✅ Analysis complete")
    print(f"Total products       : {len(products)}")
    print(f"Products with images : {len(products) - len(df)}")
    print(f"Missing images       : {len(df)}")
    print(f"📄 Excel report saved: {OUTPUT_FILE}")

    print("\n--- Preview (first 5 rows) ---")
    print(df.head())

if __name__ == "__main__":
    main()
