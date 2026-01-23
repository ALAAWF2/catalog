import pandas as pd
from pathlib import Path

FILE = "mapping.xlsx"
SEARCH_TERMS = ["2270011", "270011"]

def inspect():
    print(f"Inspecting {FILE}...")
    try:
        xls = pd.ExcelFile(FILE)
        print("Sheets:", xls.sheet_names)
        
        for sheet in xls.sheet_names:
            print(f"\n--- Sheet: {sheet} ---")
            df = pd.read_excel(xls, sheet_name=sheet)
            # Convert all to string
            df = df.astype(str)
            
            found = False
            for term in SEARCH_TERMS:
                mask = df.apply(lambda x: x.str.contains(term, case=False, na=False)).any(axis=1)
                matches = df[mask]
                if not matches.empty:
                    found = True
                    print(f"Found '{term}' in {len(matches)} rows:")
                    print(matches.to_string())
            
            if not found:
                print("No matches associated with terms found.")
                
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    inspect()
