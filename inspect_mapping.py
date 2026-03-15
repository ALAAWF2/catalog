import pandas as pd

try:
    file_path = r"create js/mapping.xlsx"
    df = pd.read_excel(file_path, sheet_name="Table5")
    
    with open('mapping_inspection.txt', 'w', encoding='utf-8') as f:
        f.write("--- Columns ---\n")
        f.write(", ".join(df.columns.astype(str).tolist()) + "\n\n")
        
        f.write("--- First 5 Rows ---\n")
        for index, row in df.head(5).iterrows():
            f.write(str(row.to_dict()) + "\n")
            
except Exception as e:
    with open('mapping_inspection.txt', 'w', encoding='utf-8') as f:
        f.write(f"Error: {e}")
