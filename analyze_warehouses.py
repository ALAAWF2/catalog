import os
import requests
import pandas as pd
import msal
from dotenv import load_dotenv

# Config
MAPPING_FILE = "create js/mapping.xlsx"
TABLE5_SHEET = "Table5"
WAREHOUSE_NAMES = {"warehouse", "warehouse riyadh"}

def get_access_token():
    # Load from create js/.env
    load_dotenv("create js/.env")
    client_id = os.getenv("CLIENT_ID")
    client_secret = os.getenv("CLIENT_SECRET")
    tenant_id = os.getenv("TENANT_ID")
    
    if not all([client_id, client_secret, tenant_id]):
        print("Missing credentials in create js/.env")
        return None

    app = msal.ConfidentialClientApplication(
        client_id=client_id,
        client_credential=client_secret,
        authority=f"https://login.microsoftonline.com/{tenant_id}",
    )
    token = app.acquire_token_for_client(
        scopes=["https://orangepax.operations.eu.dynamics.com/.default"]
    )
    return token.get("access_token")

def main():
    token = get_access_token()
    if not token: return

    print("Fetching WarehousesOnHandV2...")
    url = "https://orangepax.operations.eu.dynamics.com/data/WarehousesOnHandV2?$select=InventoryWarehouseId,TotalAvailableQuantity"
    headers = {"Authorization": f"Bearer {token}"}
    
    warehouse_ids = set()
    rows = []
    
    while url:
        try:
            r = requests.get(url, headers=headers, timeout=60)
            r.raise_for_status()
            data = r.json()
            
            for item in data.get("value", []):
                if item["TotalAvailableQuantity"] != 0:
                    warehouse_ids.add(item["InventoryWarehouseId"])
            
            url = data.get("@odata.nextLink")
            print(".", end="", flush=True)
        except Exception as e:
            print(f"Error: {e}")
            break
            
    print("\n\nUnique Warehouse IDs with Non-Zero Stock:")
    sorted_ids = sorted(list(warehouse_ids))
    
    # Load mapping
    try:
        df = pd.read_excel(MAPPING_FILE, sheet_name=TABLE5_SHEET)
        df["store number"] = df["store number"].astype(str).str.strip()
        df["outlet"] = df["outlet"].astype(str).str.strip()
        mapping = dict(zip(df["store number"], df["outlet"]))
    except Exception as e:
        print(f"Error loading mapping: {e}")
        mapping = {}

    print(f"{'ID':<15} | {'Mapped Name':<30} | {'Status':<15}")
    print("-" * 65)
    
    for wid in sorted_ids:
        mapped_name = mapping.get(wid, wid) # Default to ID
        status = "INCLUDED" if mapped_name.lower() in WAREHOUSE_NAMES else "EXCLUDED"
        
        # Highlight potential issues
        if "warehouse" in mapped_name.lower() and status == "EXCLUDED":
            status = "WARNING"
            
        print(f"{wid:<15} | {mapped_name:<30} | {status}")

if __name__ == "__main__":
    main()
