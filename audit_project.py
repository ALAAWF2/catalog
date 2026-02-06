import pandas as pd
import json
import os

MAPPING_ROOT = "mapping.xlsx"
MAPPING_JS = "create js/mapping.xlsx"
PRODUCTS_FILE = "products.json"

def audit():
    print("=== PROJECT HEALTH AUDIT ===\n")

    # 1. Mapping File Sync
    print("1. Mapping File Synchronization:")
    if os.path.exists(MAPPING_ROOT) and os.path.exists(MAPPING_JS):
        try:
            df1 = pd.read_excel(MAPPING_ROOT, sheet_name="Table5")
            df2 = pd.read_excel(MAPPING_JS, sheet_name="Table5")
            
            count1 = len(df1)
            count2 = len(df2)
            
            print(f"   - Root File Rows: {count1}")
            print(f"   - Script File Rows: {count2}")
            
            if count1 != count2:
                diff = abs(count1 - count2)
                print(f"   WARNING: Files differ by {diff} rows. One is outdated.")
            else:
                print("   Row counts match (Verification of content needed).")
        except Exception as e:
            print(f"   Error reading files: {e}")
    else:
        print("   One or both mapping files are missing.")

    # 2. Product Data Quality
    print("\n2. Product Data Quality (Based on current products.json):")
    if os.path.exists(PRODUCTS_FILE):
        try:
            with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
                products = json.load(f)
            
            total = len(products)
            uncategorized = sum(1 for p in products if p.get("category") == "UNCATEGORIZED")
            no_price = sum(1 for p in products if p.get("price", 0) <= 0)
            no_image = sum(1 for p in products if not p.get("image_path"))
            
            print(f"   - Total Products: {total}")
            
            if uncategorized > 0:
                print(f"   [!] Uncategorized Items: {uncategorized} ({(uncategorized/total)*100:.1f}%)")
            else:
                print("   [OK] No uncategorized items.")
                
            if no_price > 0:
                print(f"   [!] Zero Price Items: {no_price}")
                
            if no_image > 0:
                print(f"   [!] Missing Images: {no_image} ({(no_image/total)*100:.1f}%)")
                
        except Exception as e:
            print(f"   Error reading products.json: {e}")
    else:
        print("   products.json not found.")

if __name__ == "__main__":
    audit()
