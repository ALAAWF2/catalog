import json
from pathlib import Path

PRODUCTS_FILE = "products.json"
IMAGES_DIR = "images"

def check_pattern():
    print("Checking 'Remove Leading 2' pattern...")
    
    products = json.loads(Path(PRODUCTS_FILE).read_text(encoding="utf-8"))
    
    candidates = []
    for p in products:
        alias = str(p.get("alias", "")).strip()
        if alias.startswith("22") and len(alias) == 7:
            candidates.append(alias)
            
    print(f"Found {len(candidates)} aliases starting with '22' (len 7).")
    
    matches = 0
    match_examples = []
    
    img_dir = Path(IMAGES_DIR)
    
    for alias in candidates:
        target = alias[1:] # Remove first char (2) -> 2xxxxx
        # Check extensions
        found = False
        for ext in [".jpg", ".jpeg", ".png", ".webp"]:
            if (img_dir / f"{target}{ext}").exists():
                found = True
                break
        
        if found:
            matches += 1
            if len(match_examples) < 5:
                match_examples.append(f"{alias} -> {target}")
                
    print(f"Pattern Matches (Image exists for truncated alias): {matches}")
    print("Examples:", match_examples)

if __name__ == "__main__":
    check_pattern()
