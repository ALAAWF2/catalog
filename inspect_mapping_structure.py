import pandas as pd
from pathlib import Path

MAPPING_FILE = "mapping.xlsx"
SEARCH_TERM = "24057"

def main():
    print(f"Inspecting {MAPPING_FILE}...\n")
    
    try:
        xl = pd.ExcelFile(MAPPING_FILE)
        print(f"Sheets found: {xl.sheet_names}\n")
        
        for sheet in xl.sheet_names:
            print(f"=== Sheet: {sheet} ===")
            df = pd.read_excel(MAPPING_FILE, sheet_name=sheet)
            print(f"Columns: {df.columns.tolist()}")
            print(f"Shape: {df.shape}")
            
            # Search for the term anywhere in the dataframe
            # Convert whole DF to string
            mask = df.astype(str).apply(lambda x: x.str.contains(SEARCH_TERM, na=False))
            
            # Check if any value matches
            if mask.any().any():
                print(f"!!! FOUND '{SEARCH_TERM}' in this sheet! !!!")
                # Get coordinates
                rows, cols = mask.values.nonzero()
                for r, c in zip(rows, cols):
                    print(f"  -> At Row {r} (Index), Column '{df.columns[c]}'")
                    print(f"     Row Content: {df.iloc[r].to_dict()}")
            else:
                print(f"   '{SEARCH_TERM}' NOT found in this sheet.")
            print("-" * 30 + "\n")
            
    except Exception as e:
        print(f"Error reading file: {e}")

if __name__ == "__main__":
    main()
