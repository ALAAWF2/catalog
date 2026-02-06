import pandas as pd
import os

FILE_ROOT = "mapping.xlsx"
FILE_SUB = "create js/mapping.xlsx"

def inspect_file(path):
    print(f"\n--- Inspecting {path} ---")
    if not os.path.exists(path):
        print("File not found.")
        return

    try:
        df = pd.read_excel(path, sheet_name="Table5")
        print(f"Columns: {list(df.columns)}")
        
        # Check for relevant columns
        if "store number" in df.columns and "outlet" in df.columns:
            # Check for 'warehouse' mappings
            warehouses = df[df["outlet"].astype(str).str.lower().isin(["warehouse", "warehouse riyadh"])]
            print(f"Mapped Warehouses:\n{warehouses}")
            
            # Check for potential unmapped or close matches
            others = df[~df["outlet"].astype(str).str.lower().isin(["warehouse", "warehouse riyadh"])]
            print(f"Other Outlets Sample (First 5):\n{others.head(5)}")
            
            # Check for duplicates
            dups = df[df.duplicated(subset=["store number"], keep=False)]
            if not dups.empty:
                print(f"!!! DUPLICATE STORE NUMBERS !!!\n{dups}")
        else:
            print("Required columns 'store number' or 'outlet' missing.")
            
    except Exception as e:
        print(f"Error reading {path}: {e}")

print("=== COMPARING MAPPING FILES ===")
inspect_file(FILE_ROOT)
inspect_file(FILE_SUB)
