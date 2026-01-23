import json
from pathlib import Path

PRODUCTS_FILE = "products.json"

def verify():
    print("--- Phase 5: Verification ---")
    
    if not Path(PRODUCTS_FILE).exists():
        print("products.json not found.")
        return

    data = json.loads(Path(PRODUCTS_FILE).read_text(encoding="utf-8"))
    print(f"Loaded {len(data)} products.")
    
    # Check for image_path field
    with_image = 0
    missing_image = 0
    
    for p in data:
        if "image_path" not in p:
            print("❌ 'image_path' field missing in products!")
            return
        if p["image_path"]:
            with_image += 1
        else:
            missing_image += 1
            
    print(f"Products with Image: {with_image}")
    print(f"Products Missing Image: {missing_image}")
    
    # Sample Check: 2270011 -> 270011.jpg (or similar)
    # Finding 2270011...
    found = False
    for p in data:
        if str(p["code"]) == "2270011" or str(p["alias"]) == "2270011":
            print(f"Sample Check 2270011: ImagePath = {p['image_path']}")
            found = True
            break
            
    if not found:
        print("Sample 2270011 not found in products.")

if __name__ == "__main__":
    verify()
