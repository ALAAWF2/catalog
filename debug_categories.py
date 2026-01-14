import json
from pathlib import Path

PRODUCTS_FILE = Path("products.json")

def main():
    if not PRODUCTS_FILE.exists():
        print("products.json not found")
        return

    with open(PRODUCTS_FILE, "r", encoding="utf-8") as f:
        products = json.load(f)

    uncategorized = [p for p in products if p.get("category") == "UNCATEGORIZED"]
    uncategorized_in_stock = [p for p in uncategorized if p.get("stock", 0) > 0]

    print(f"Total products: {len(products)}")
    print(f"Total Uncategorized: {len(uncategorized)}")
    print(f"Active Uncategorized (Stock > 0): {len(uncategorized_in_stock)}")
    
    # Analyze why
    missing_alias = 0
    has_alias_but_no_cat = 0
    
    print("\n--- Top 10 Uncategorized Examples ---")
    for i, p in enumerate(uncategorized[:10]):
        try:
            print(f"{i+1}. Code: {p.get('code')} | Alias: {p.get('alias')} | Name: {p.get('name')}")
        except:
             print(f"{i+1}. Code: {p.get('code')} | Alias: {p.get('alias')} | Name: (unicode name)")
        
    for p in uncategorized:
        if not p.get("alias"):
            missing_alias += 1
        else:
            has_alias_but_no_cat += 1
            
    print(f"\nAnalysis of Uncategorized ({len(uncategorized)}):")
    print(f"- Missing Alias (OldItem): {missing_alias}")
    print(f"- Has Alias but mapping failed/empty: {has_alias_but_no_cat}")

    # Write list to file
    with open("uncategorized_list.txt", "w", encoding="utf-8") as f:
        f.write(f"Total Uncategorized: {len(uncategorized)}\n")
        f.write(f"Active (Stock > 0): {len(uncategorized_in_stock)}\n\n")
        f.write("--- Active Uncategorized Items ---\n")
        for p in uncategorized_in_stock:
             f.write(f"Code: {p.get('code')} | Alias: {p.get('alias')} | Name: {p.get('name')}\n")
        
        f.write("\n--- All Uncategorized Items ---\n")
        for p in uncategorized:
             f.write(f"Code: {p.get('code')} | Alias: {p.get('alias')} | Name: {p.get('name')}\n")
    
    print("\nSaved list to 'uncategorized_list.txt'")

if __name__ == "__main__":
    main()
