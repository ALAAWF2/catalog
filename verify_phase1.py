import json
import time
import subprocess
from pathlib import Path
import hashlib

CATALOG_SCRIPT = "create js/generate_catalog.py"
PRODUCTS_FILE = "products.json"
SALES_FILE = "sales_by_outlet.json"
BASELINE_PRODUCTS = "products_baseline.json"
BASELINE_SALES = "sales_baseline.json"

def get_file_hash(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()

def verify():
    print("--- Phase 1: Verification ---")
    
    # 1. Run Optimized Script
    start_time = time.time()
    print(f"Running optimized {CATALOG_SCRIPT}...")
    result = subprocess.run(["python", CATALOG_SCRIPT], capture_output=True, text=True)
    end_time = time.time()
    
    if result.returncode != 0:
        print("❌ Script failed!")
        print(result.stderr)
        return

    duration = end_time - start_time
    print(f"Optimization Run Time: {duration:.2f}s")
    
    # 2. Compare Files
    print("Checking consistency...")
    
    # Products
    try:
        base_p = json.loads(Path(BASELINE_PRODUCTS).read_text(encoding="utf-8"))
        curr_p = json.loads(Path(PRODUCTS_FILE).read_text(encoding="utf-8"))
        
        # Sort by code to ensure order independence (if groupby changed order)
        # Note: Original script sorts by sorting algo?
        # Original: df_items sorted by SalesPriceDate.
        # Groupby sales logic is done BEFORE building products.
        # "products" list order depends on df_items iterrows order.
        # sales data aggregation shouldn't affect products order.
        
        # We check full equality
        if hashlib.sha256(json.dumps(base_p, sort_keys=True).encode()).hexdigest() == \
           hashlib.sha256(json.dumps(curr_p, sort_keys=True).encode()).hexdigest():
            print("products.json matches baseline EXACTLY.")
        else:
            print("products.json DIFFERS from baseline.")
            # Deep diff would be needed here
            
    except Exception as e:
        print(f"Error comparing products: {e}")

    # Sales
    try:
        base_s = json.loads(Path(BASELINE_SALES).read_text(encoding="utf-8"))
        curr_s = json.loads(Path(SALES_FILE).read_text(encoding="utf-8"))
        
        # Sort keys for robust comparison
        base_s_hash = hashlib.sha256(json.dumps(base_s, sort_keys=True).encode()).hexdigest()
        curr_s_hash = hashlib.sha256(json.dumps(curr_s, sort_keys=True).encode()).hexdigest()
        
        if base_s_hash == curr_s_hash:
            print("sales_by_outlet.json matches baseline EXACTLY.")
        else:
             print("sales_by_outlet.json DIFFERS from baseline.")
             
    except Exception as e:
        print(f"Error comparing sales: {e}")

if __name__ == "__main__":
    verify()
