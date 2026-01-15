import pandas as pd

def inspect_excel(file_path):
    try:
        df = pd.read_excel(file_path, nrows=5)
        print(f"--- {file_path} ---")
        print("Columns:", df.columns.tolist())
        print(df.head())
        print("\n")
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

inspect_excel(r"C:\Users\ALAA-ORANGE\Desktop\catalog\create js\category2026.xlsx")
inspect_excel(r"C:\Users\ALAA-ORANGE\Desktop\catalog\create js\mapping.xlsx")
