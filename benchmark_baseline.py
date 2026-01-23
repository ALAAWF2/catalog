import time
import shutil
import json
import random
import subprocess
from pathlib import Path

# Config
CATALOG_SCRIPT = "create js/generate_catalog.py"
PRODUCTS_FILE = "products.json"
SALES_FILE = "sales_by_outlet.json"
BASELINE_PRODUCTS = "products_baseline.json"
BASELINE_SALES = "sales_baseline.json"
SAMPLE_FILE = "sample_baseline.json"

def run_benchmark():
    print(f"--- Phase 0: Establishing Baseline ---")
    
    # 1. Measure Execution Time
    start_time = time.time()
    print(f"Running {CATALOG_SCRIPT}...")
    
    result = subprocess.run(["python", CATALOG_SCRIPT], capture_output=True, text=True)
    
    end_time = time.time()
    duration = end_time - start_time
    
    if result.returncode != 0:
        print("ERROR: Script failed!")
        print(result.stderr)
        return
    
    print(f"Script finished in {duration:.2f} seconds.")
    
    # 2. Capture Snapshots
    if Path(PRODUCTS_FILE).exists():
        shutil.copy(PRODUCTS_FILE, BASELINE_PRODUCTS)
        print(f"Saved {BASELINE_PRODUCTS}")
        
        # Stats
        data = json.loads(Path(PRODUCTS_FILE).read_text(encoding="utf-8"))
        print(f"Total Products: {len(data)}")
        
        # 3. Sample 20 items
        sample = random.sample(data, min(20, len(data)))
        Path(SAMPLE_FILE).write_text(json.dumps(sample, indent=2, ensure_ascii=False), encoding="utf-8")
        print(f"Saved {SAMPLE_FILE} with {len(sample)} items.")
        
    else:
        print(f"ERROR: {PRODUCTS_FILE} was not generated.")
        
    if Path(SALES_FILE).exists():
        shutil.copy(SALES_FILE, BASELINE_SALES)
        print(f"Saved {BASELINE_SALES}")
    else:
        print(f"ERROR: {SALES_FILE} was not generated.")

if __name__ == "__main__":
    run_benchmark()
