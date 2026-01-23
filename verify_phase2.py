import pandas as pd
import time
import subprocess
from pathlib import Path

SCRIPT = "generate_image_report.py"
OUTPUT_FILE = "products_images_report.xlsx"
BASELINE_FILE = "products_images_report_baseline.xlsx"

def verify():
    print("--- Phase 2: Verification ---")
    
    # 1. Run Optimized Script
    start_time = time.time()
    result = subprocess.run(["python", SCRIPT], capture_output=True, text=True)
    end_time = time.time()
    
    if result.returncode != 0:
        print("Script failed!")
        print(result.stderr)
        return

    duration = end_time - start_time
    print(f"Optimization Run Time: {duration:.2f}s")
    
    # 2. Compare Dataframes
    print("Checking consistency...")
    
    try:
        # Load Baseline
        df_base = pd.read_excel(BASELINE_FILE).fillna("")
        # Load New
        df_new = pd.read_excel(OUTPUT_FILE).fillna("")
        
        # Check equality
        # Sort values to be safe, though strict logic should preserve order if input products.json order is same
        # Original script iterates products list. Order should be identical.
        
        # Compare columns
        diff_cols = set(df_base.columns) ^ set(df_new.columns)
        if diff_cols:
            print(f"Columns mismatch! Diff: {diff_cols}")
            return
            
        # Compare content
        try:
            pd.testing.assert_frame_equal(df_base, df_new)
            print("Report matches baseline EXACTLY.")
        except AssertionError as e:
            print("Report DIFFERS from baseline.")
            print(e)
            
    except Exception as e:
        print(f"Error comparing excel files: {e}")

if __name__ == "__main__":
    verify()
