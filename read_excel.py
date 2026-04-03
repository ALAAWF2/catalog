import pandas as pd
import json
import sys

try:
    df = pd.read_excel('managers emails.xlsx')
    data = df.head(10).to_dict('records')
    with open('temp_output.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("Success")
except Exception as e:
    with open('temp_output.json', 'w', encoding='utf-8') as f:
        f.write("Error: " + str(e))
    print("Error")
