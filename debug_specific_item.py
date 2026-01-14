import pandas as pd
import json
from pathlib import Path

MAPPING_FILE = "mapping.xlsx"
PRODUCTS_FILE = "products.json"
TARGET_CODE = "100010661"
TARGET_ALIAS = "24057"

def main():
    print(f"--- Investigating Item {TARGET_CODE} / Alias {TARGET_ALIAS} ---")

    # 1. Check products.json
    print("\n1. Checking products.json...")
    if Path(PRODUCTS_FILE).exists():
        with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
            products = json.load(f)
        
        found_p = next((p for p in products if str(p.get("code")) == TARGET_CODE), None)
        if found_p:
            print("   Found Item in products.json:")
            print(f"   - Code: {found_p.get('code')}")
            try:
                print(f"   - Alias: '{found_p.get('alias')}'")
                print(f"   - Category: '{found_p.get('category')}'")
            except:
                print(f"   - Category: (Unicode Text - Length {len(found_p.get('category'))})")
        else:
            print("   Item NOT found in products.json")
    else:
        print("   products.json missing.")

    # 2. Check mapping.xlsx
    print("\n2. Checking mapping.xlsx...")
    try:
        df = pd.read_excel(MAPPING_FILE, sheet_name="Table6")
        
        # Normalize columns for search just like the script does
        if "alias" in df.columns:
            df["alias_str"] = df["alias"].astype(str).str.strip().replace("nan", "")
            
            # Search for exact match
            match = df[df["alias_str"] == TARGET_ALIAS]
            
            if not match.empty:
                print(f"   Found {len(match)} match(es) in mapping:")
                for i, r in match.iterrows():
                    print(f"   - Row {i}: Alias='{r['alias']}' | Category='{r['Category']}'")
            else:
                print(f"   Alias '{TARGET_ALIAS}' NOT found in mapping.xlsx")
                
                # Fuzzy search
                partial = df[df["alias_str"].str.contains(TARGET_ALIAS, regex=False)]
                if not partial.empty:
                    print(f"   ...but found partial matches: {partial['alias'].tolist()}")
        else:
            print("   Column 'alias' missing in Table6")
            
    except Exception as e:
        print(f"   Error reading mapping file: {e}")

if __name__ == "__main__":
    main()
