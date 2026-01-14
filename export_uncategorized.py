import json
import pandas as pd
from pathlib import Path

PRODUCTS_FILE = Path("products.json")
OUTPUT_FILE = Path("uncategorized_items.xlsx")

def main():
    if not PRODUCTS_FILE.exists():
        print("products.json not found")
        return

    print("Loading products...")
    with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
        products = json.load(f)

    data = []
    
    print("Filtering uncategorized items...")
    for p in products:
        if p.get("category") == "UNCATEGORIZED":
            stock = p.get("stock", 0)
            data.append({
                "Code": p.get("code"),
                "Alias": p.get("alias"),
                "Name": p.get("name"),
                "Gofrugal Code": p.get("gofrugal_code"),
                "Stock": stock,
                "Status": "Active" if stock > 0 else "Inactive"
            })

    if not data:
        print("No uncategorized items found.")
        return

    print(f"Found {len(data)} items. Exporting to Excel...")
    df = pd.DataFrame(data)
    
    # Sort: Active first, then by Stock desc
    df.sort_values(by=["Status", "Stock"], ascending=[True, False], inplace=True)
    
    df.to_excel(OUTPUT_FILE, index=False)
    print(f"Successfully saved to {OUTPUT_FILE.resolve()}")

if __name__ == "__main__":
    main()
