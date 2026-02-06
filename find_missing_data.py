import os
import requests
import pandas as pd
import msal
from dotenv import load_dotenv

# Config
MAPPING_FILE_JS = "create js/mapping.xlsx"
MAPPING_FILE_ROOT = "mapping.xlsx"
TABLE5_SHEET = "Table5"

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

def get_mapping_ids(file_path):
    if not os.path.exists(file_path):
        return set()
    try:
        df = pd.read_excel(file_path, sheet_name=TABLE5_SHEET)
        # Assuming 'store number' is the join key for WarehouseId
        if "store number" in df.columns:
            return set(df["store number"].astype(str).str.strip())
    except:
        pass
    return set()

def main():
    token = get_access_token()
    if not token: return

    print("Fetching Live Stock Data...")
    url = "https://orangepax.operations.eu.dynamics.com/data/WarehousesOnHandV2?$select=InventoryWarehouseId,TotalAvailableQuantity"
    headers = {"Authorization": f"Bearer {token}"}
    
    active_ids = {} # ID -> Total Qty
    
    while url:
        try:
            r = requests.get(url, headers=headers, timeout=60)
            r.raise_for_status()
            data = r.json()
            
            for item in data.get("value", []):
                qty = item["TotalAvailableQuantity"]
                wid = item["InventoryWarehouseId"]
                if qty != 0:
                    active_ids[wid] = active_ids.get(wid, 0) + qty
            
            url = data.get("@odata.nextLink")
        except Exception as e:
            print(f"Error: {e}")
            break
            
    print(f"Found {len(active_ids)} IDs with stock.")

    # Compare
    mapped_js = get_mapping_ids(MAPPING_FILE_JS)
    mapped_root = get_mapping_ids(MAPPING_FILE_ROOT)
    
    unmapped_in_js = []
    unmapped_in_root = []
    
    print("\n--- DATA DISCREPANCY REPORT ---")
    
    for wid in active_ids:
        in_js = wid in mapped_js
        in_root = wid in mapped_root
        
        if not in_js:
            unmapped_in_js.append(wid)
            
        if not in_root:
            unmapped_in_root.append(wid)

    if unmapped_in_js:
        print(f"\n[CRITICAL] IDs missing from Script Mapping ({MAPPING_FILE_JS}):")
        for x in unmapped_in_js:
            print(f" - {x} (Total Qty: {active_ids[x]}) {'[EXISTS IN ROOT FILE]' if x in mapped_root else '[MISSING IN BOTH]'}")
    else:
        print(f"\n[OK] All active IDs are present in {MAPPING_FILE_JS}")

    if unmapped_in_root:
        print(f"\n[INFO] IDs missing from Root Mapping ({MAPPING_FILE_ROOT}):")
        for x in unmapped_in_root:
            print(f" - {x} (Total Qty: {active_ids[x]})")

if __name__ == "__main__":
    main()
