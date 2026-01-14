import pandas as pd
from pathlib import Path

MAPPING_FILE = "mapping.xlsx"
TABLE6_SHEET = "Table6"
def main():
    print("Loading mapping.xlsx...")
    df = pd.read_excel(MAPPING_FILE, sheet_name=TABLE6_SHEET)
    
    # Check exact value in 'alias' column
    if "alias" not in df.columns:
        print(f"Column 'alias' not found. Available: {df.columns.tolist()}")
        return

    targets = ["489808", "489803", "489812", "489805", "489804"]

    print(f"Checking {len(targets)} targets against mapping aliases...")
    
    # Convert mapping aliases to string set for fast lookup
    mapping_aliases = set(df["alias"].astype(str).str.strip().tolist())
    
    for t in targets:
        if t in mapping_aliases:
            print(f" [V] FOUND: {t}")
        else:
            print(f" [X] MISSING: {t}")
            
    print(f"Total mapping aliases: {len(mapping_aliases)}")
        
    # Check what 'astype(str)' produces globally
    sample_values = df["alias"].head(5).tolist()
    print(f"\nSample raw alias values: {sample_values}")
    
if __name__ == "__main__":
    main()
