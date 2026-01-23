import json
from pathlib import Path

PRODUCTS_FILE = "products.json"
IMAGES_DIR = "images"

def check_pattern():
    print("Checking '4' and '44' patterns...")
    
    try:
        products = json.loads(Path(PRODUCTS_FILE).read_text(encoding="utf-8"))
    except Exception as e:
        print(f"Error loading products: {e}")
        return

    # Categories to check
    # 1. Starts with 4 (len ?)
    # 2. Starts with 44 (len ?)
    
    candidates_4 = []
    candidates_44 = []
    
    for p in products:
        alias = str(p.get("alias", "")).strip()
        if not alias: continue
        
        if alias.startswith("44"):
            candidates_44.append(alias)
        elif alias.startswith("4"):
            candidates_4.append(alias)
            
    print(f"Found {len(candidates_4)} aliases starting with '4' (not 44).")
    print(f"Found {len(candidates_44)} aliases starting with '44'.")
    
    img_dir = Path(IMAGES_DIR)
    
    def check_transform(name, transform_func, label):
        matches = 0
        examples = []
        for alias in name:
            target = transform_func(alias)
            if not target: continue
            
            found = False
            for ext in [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"]:
                if (img_dir / f"{target}{ext}").exists():
                    found = True
                    break
            
            if found:
                matches += 1
                if len(examples) < 3:
                    examples.append(f"{alias} -> {target}")
        return matches, examples

    # Test Hypotheses
    
    # Hypothesis A: 44xxxxx -> 4xxxxx (Remove first 4)
    print("\nHypothesis: 44xxxxx -> 8xxxxx (Remove first 4 only?)")
    m, ex = check_transform(candidates_44, lambda x: x[1:], "Remove first char")
    print(f"  Matches: {m} / {len(candidates_44)}")
    print(f"  Examples: {ex}")

    # Hypothesis B: 44xxxxx -> xxxxx (Remove first 44)
    print("\nHypothesis: 44xxxxx -> xxxxxx (Remove '44')")
    m, ex = check_transform(candidates_44, lambda x: x[2:], "Remove first 2 chars")
    print(f"  Matches: {m} / {len(candidates_44)}")
    print(f"  Examples: {ex}")

    # Hypothesis C: 4xxxxx -> xxxxx (Remove '4')
    print("\nHypothesis: 4xxxxx -> xxxxx (Remove '4')")
    m, ex = check_transform(candidates_4, lambda x: x[1:], "Remove first char")
    print(f"  Matches: {m} / {len(candidates_4)}")
    print(f"  Examples: {ex}")

    # Hypothesis D: Check if 4xxxxx -> image '4xxxxx' actually exists (Baseline)
    print("\nBaseline: Image exact match")
    m4, ex4 = check_transform(candidates_4, lambda x: x, "Exact")
    m44, ex44 = check_transform(candidates_44, lambda x: x, "Exact")
    print(f"  Matches (4...): {m4} / {len(candidates_4)}")
    print(f"  Matches (44...): {m44} / {len(candidates_44)}")

if __name__ == "__main__":
    check_pattern()
