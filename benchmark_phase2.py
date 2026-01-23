import time
import shutil
import subprocess
from pathlib import Path

SCRIPT = "generate_image_report.py"
OUTPUT_FILE = "products_images_report.xlsx"
BASELINE_FILE = "products_images_report_baseline.xlsx"

def benchmark():
    print(f"--- Phase 2: Benchmarking {SCRIPT} ---")
    
    start_time = time.time()
    result = subprocess.run(["python", SCRIPT], capture_output=True, text=True)
    end_time = time.time()
    
    if result.returncode != 0:
        print("Script failed!")
        print(result.stderr)
        return

    duration = end_time - start_time
    print(f"Script finished in {duration:.2f} seconds.")
    
    if Path(OUTPUT_FILE).exists():
        shutil.copy(OUTPUT_FILE, BASELINE_FILE)
        print(f"Saved {BASELINE_FILE}")
    else:
        print("Output file not found.")

if __name__ == "__main__":
    benchmark()
