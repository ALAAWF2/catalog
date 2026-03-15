import pandas as pd
import json

try:
    file_path = r"C:\Users\ALAA-ORANGE\Desktop\catalog\usersssss-جدول البضاعة.xlsx"
    df = pd.read_excel(file_path)
    
    with open('excel_inspection.txt', 'w', encoding='utf-8') as f:
        f.write("--- Columns ---\n")
        f.write(", ".join(df.columns.astype(str).tolist()) + "\n\n")
        
        f.write("--- First 3 Rows ---\n")
        for index, row in df.head(3).iterrows():
            f.write(str(row.to_dict()) + "\n")
        
except Exception as e:
    with open('excel_inspection.txt', 'w', encoding='utf-8') as f:
        f.write(f"Error: {e}")
