import pandas as pd
import os

# Config
FILE_PATH = "create js/mapping.xlsx"
SHEET_NAME = "Table5"

NEW_ENTRY = {
    "store number": "1115",
    "outlet": "1115-Alrabie Mall",
    "Column3": "1115-Alrabie Mall" # Assuming this column exists and usually matches outlet
}

def add_mapping():
    if not os.path.exists(FILE_PATH):
        print(f"Error: {FILE_PATH} not found.")
        return

    try:
        df = pd.read_excel(FILE_PATH, sheet_name=SHEET_NAME)
        print(f"Original Row Count: {len(df)}")
        
        # Check if 1115 already exists
        if "1115" in df["store number"].astype(str).values:
            print("ID 1115 already exists in mapping.")
            # Update it instead?
            idx = df[df["store number"].astype(str) == "1115"].index
            print(f"Updating existing entry at index {idx}")
            df.loc[idx, "outlet"] = NEW_ENTRY["outlet"]
            df.loc[idx, "Column3"] = NEW_ENTRY["Column3"]
        else:
            print("Adding new entry...")
            new_row = pd.DataFrame([NEW_ENTRY])
            df = pd.concat([df, new_row], ignore_index=True)

        # Save back (Read-Modify-Write, so we replace the file)
        with pd.ExcelWriter(FILE_PATH, engine="openpyxl", mode="w") as writer:
            df.to_excel(writer, sheet_name=SHEET_NAME, index=False)
            
        print(f"New Row Count: {len(df)}")
        print("Successfully updated mapping.xlsx")
        
    except Exception as e:
        print(f"Error updating excel: {e}")

if __name__ == "__main__":
    add_mapping()
