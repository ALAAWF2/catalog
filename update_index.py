import pandas as pd
import json

def update_index():
    print("Reading Excel...")
    df = pd.read_excel('C:/Users/ALAA-ORANGE/Desktop/catalog/itemsfornotshow.xlsx')
    ids1 = df.iloc[:, 0].dropna().astype(int).astype(str).tolist()
    ids2 = df.iloc[:, 1].dropna().astype(int).astype(str).tolist()
    
    all_new_ids = list(set(ids1 + ids2))
    final_ids = ["9618", "9619"] + all_new_ids
    
    # We want format without single quotes inside if possible, standard json
    final_ids_json = json.dumps(final_ids)
    
    html_path = 'C:/Users/ALAA-ORANGE/Desktop/catalog/index.html'
    
    print("Reading HTML...")
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    target_line = 'const blockedAliases = ["9618", "9619"];'
    replacement_line = f'const blockedAliases = {final_ids_json};'
    
    if target_line in html_content:
        new_html_content = html_content.replace(target_line, replacement_line)
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(new_html_content)
        print("✅ Successfully updated index.html with new hidden items.")
    else:
        print("❌ Could not find the target line to replace in index.html.")

if __name__ == "__main__":
    update_index()
