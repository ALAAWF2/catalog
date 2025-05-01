import pandas as pd
import json
import os

# تحديد المجلد الحالي الذي يوجد فيه السكربت
current_dir = os.path.dirname(os.path.abspath(__file__))

# مسار ملف الإكسل داخل نفس المجلد
excel_path = os.path.join(current_dir, "cattemp.xlsx")
output_path = os.path.join(current_dir, "products.js")

# قراءة ملف الاكسل
df = pd.read_excel(excel_path)

# إعادة تسمية الأعمدة لتتوافق مع السكربت
df = df.rename(columns={
    'Outlet Name': 'outlet',
    'Category': 'category',
    'Item Code': 'code',
    'Item Alias': 'alias',
    'Item Name': 'name',
    'PRICE': 'price',
    'Current Stock': 'stock',
    'sold_count': 'sales'
})

# تنظيف القيم
df['code'] = df['code'].astype(str).str.strip()
df['alias'] = df['alias'].astype(str).str.strip()
df['name'] = df['name'].astype(str).str.strip()
df['category'] = df['category'].astype(str).str.strip()
df['outlet'] = df['outlet'].astype(str).str.strip()
df['sales'] = pd.to_numeric(df['sales'], errors='coerce').fillna(0).astype(int)

# تحويل إلى dict
products_list = df.to_dict(orient='records')

# إنشاء ملف products.js
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(f"const data = {json.dumps(products_list, ensure_ascii=False, indent=2)};")

print("✅ تم إنشاء ملف products.js بنجاح في نفس المجلد.")
