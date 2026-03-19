import pandas as pd
import json

file_path = r'C:\Users\ALAA-ORANGE\Desktop\catalog\جدول المستلزمات.xlsx'
try:
    df = pd.read_excel(file_path)
    records = df.to_dict('records')
    # تنظيف البيانات من قيم NaN التي لا يدعمها JSON
    clean_records = []
    for r in records:
        clean_r = {k: (v if pd.notnull(v) else None) for k, v in r.items()}
        clean_records.append(clean_r)
        
    with open(r'C:\Users\ALAA-ORANGE\Desktop\catalog\extras.json', 'w', encoding='utf-8') as f:
        json.dump(clean_records, f, ensure_ascii=False, indent=2)
    print("SUCCESS")
except Exception as e:
    print(f"ERROR: {e}")
