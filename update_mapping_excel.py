import pandas as pd
import os

# Config
FILE_PATH = "mapping.xlsx"
SHEET_NAME = "Table5"

NEW_ENTRIES = [
    {"store number": "1114", "outlet": "1114-Malgha Mall", "Column3": "1114-Malgha Mall"},
    {"store number": "1115", "outlet": "1115-Alrabie Mall", "Column3": "1115-Alrabie Mall"},
    {"store number": "1906", "outlet": "1906-LAVANDA PARK", "Column3": "1906-LAVANDA PARK"}
]

def add_mapping():
    if not os.path.exists(FILE_PATH):
        print(f"Error: {FILE_PATH} not found.")
        return

    try:
        df = pd.read_excel(FILE_PATH, sheet_name=SHEET_NAME)
        print(f"Original Row Count: {len(df)}")
        
        for entry in NEW_ENTRIES:
            store_id = str(entry['store number'])
            if store_id in df["store number"].astype(str).values:
                print(f"ID {store_id} already exists in mapping.")
                idx = df[df["store number"].astype(str) == store_id].index
                print(f"Updating existing entry at index {idx.tolist()[0]}")
                df.loc[idx, "outlet"] = entry["outlet"]
                df.loc[idx, "Column3"] = entry["Column3"]
            else:
                print(f"Adding new entry for {store_id}...")
                new_row = pd.DataFrame([entry])
                df = pd.concat([df, new_row], ignore_index=True)

        # Save back (Read-Modify-Write)
        with pd.ExcelWriter(FILE_PATH, engine="openpyxl", mode="a", if_sheet_exists="replace") as writer:
            df.to_excel(writer, sheet_name=SHEET_NAME, index=False)
            
        print(f"New Row Count: {len(df)}")
        print("Successfully updated mapping.xlsx")
        
    except Exception as e:
        print(f"Error updating excel: {e}")

if __name__ == "__main__":
    add_mapping()
