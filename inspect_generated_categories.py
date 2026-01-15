import json
import collections

try:
    with open("products.json", "r", encoding="utf-8") as f:
        products = json.load(f)
        
    print(f"Total products: {len(products)}")
    
    categories = collections.Counter(p.get("category", "MISSING") for p in products)
    print("\nCategory Distribution:")
    for cat, count in categories.most_common(20):
        print(f"  {cat}: {count}")
        
    print("\nSample items with categories:")
    for p in products[:5]:
        print(f"  Code: {p.get('code')} -> Cat: {p.get('category')}")
        
except Exception as e:
    print(f"Error reading products.json: {e}")
