import os
import json
import requests
import pandas as pd
import msal
from dotenv import load_dotenv
from datetime import datetime, timedelta

# =========================
# CONFIG
# =========================
MAPPING_FILE = "mapping.xlsx"
TABLE5_SHEET = "Table5"
TABLE6_SHEET = "Table6"

BASE_DIR = Path(__file__).resolve().parent
OUTPUT_PRODUCTS = BASE_DIR / "products.json"
OUTPUT_FIRST_SEEN = BASE_DIR / "first_seen.json"
OUTPUT_SALES_BY_OUTLET = BASE_DIR / "sales_by_outlet.json"

TIMEOUT = 120
BASE_URL = "https://orangepax.operations.eu.dynamics.com/data"
WAREHOUSE_NAMES = {"warehouse", "warehouse riyadh"}

# =========================
# AUTH
# =========================
def get_access_token():
    load_dotenv()
    client_id = os.getenv("CLIENT_ID")
    client_secret = os.getenv("CLIENT_SECRET")
    tenant_id = os.getenv("TENANT_ID")
    
    if not all([client_id, client_secret, tenant_id]):
        raise ValueError("Missing credentials in .env file (CLIENT_ID, CLIENT_SECRET, TENANT_ID)")

    app = msal.ConfidentialClientApplication(
        client_id=client_id,
        client_credential=client_secret,
        authority=f"https://login.microsoftonline.com/{tenant_id}",
    )
    token = app.acquire_token_for_client(
        scopes=["https://orangepax.operations.eu.dynamics.com/.default"]
    )
    if "access_token" not in token:
        raise Exception(f"Failed to acquire token: {token}")
    return token["access_token"]

# =========================
# FETCH WITH PAGINATION
# =========================
def fetch_all(token, url, label):
    headers = {"Authorization": f"Bearer {token}"}
    rows, page = [], 0
    print(f"🚀 [{label}] Starting fetch...")
    while url:
        page += 1
        try:
            r = requests.get(url, headers=headers, timeout=TIMEOUT)
            r.raise_for_status()
            data = r.json()
            rows.extend(data.get("value", []))
            print(f"   [{label}] Page {page} | Rows so far: {len(rows):,}")
            url = data.get("@odata.nextLink")
        except requests.exceptions.RequestException as e:
            print(f"❌ Error fetching {label}: {e}")
            raise
    return pd.DataFrame(rows)

# =========================
# LOAD MAPPINGS
# =========================
def load_mapping(sheet, cols):
    if not os.path.exists(MAPPING_FILE):
        raise FileNotFoundError(f"Mapping file not found: {MAPPING_FILE}")
        
    df = pd.read_excel(MAPPING_FILE, sheet_name=sheet)
    # Ensure columns exist before selecting
    missing_cols = [c for c in cols if c not in df.columns]
    if missing_cols:
        raise ValueError(f"Missing columns {missing_cols} in sheet {sheet}")
        
    df = df[cols].copy()
    for c in cols:
        df[c] = df[c].astype(str).str.strip()
    return df

# =========================
# PROCESS & GENERATE
# =========================
def main():
    token = get_access_token()

    # 1. Load Mappings
    print("📥 Loading mappings...")
    df_table5 = load_mapping(TABLE5_SHEET, ["store number", "outlet"])
    df_table6 = load_mapping(TABLE6_SHEET, ["alias", "Category", "english name", "Item code"])

    # 2. Fetch Data from Dynamics
    # OnHand
    df_onhand_raw = fetch_all(
        token,
        f"{BASE_URL}/WarehousesOnHandV2?$select=ItemNumber,InventoryWarehouseId,ProductName,TotalAvailableQuantity",
        "ONHAND"
    )
    
    # Barcodes
    df_barcode_raw = fetch_all(
        token,
        f"{BASE_URL}/RetailInventItemBarcode?$select=itemId,description",
        "BARCODE"
    ).drop_duplicates("itemId")

    # Item Master
    df_items_raw = fetch_all(
        token,
        f"{BASE_URL}/ReleasedProductsV2?$select=ItemNumber,SalesPrice,ProductSearchName,SalesPriceDate,OldItem",
        "ITEM_MASTER"
    )

    # Sales (Last 7 Days) - Server Side Filter (Date Only for Safety)
    print("⏳ calculating date filter...")
    now_utc = datetime.now(datetime.UTC)
    seven_days_ago = (now_utc - timedelta(days=7)).strftime("%Y-%m-%dT%H:%M:%SZ")

    # Relaxed filter: Only filter by date on server to avoid 400 errors with Enums/Quantity
    sales_url = (
        f"{BASE_URL}/RetailTransactionSalesLines"
        f"?$select=OperatingUnitNumber,TransactionDate,TransactionStatus,UnitQuantity,ItemId"
        f"&$filter=TransactionDate ge {seven_days_ago}"
    )

    df_sales_raw = fetch_all(token, sales_url, "SALES")

    print("⚙️ Processing Data...")

    # =====================
    # PREPARE ONHAND
    # =====================
    df_onhand_raw["InventoryWarehouseId"] = df_onhand_raw["InventoryWarehouseId"].astype(str).str.strip()
    df_onhand_raw["ItemNumber"] = df_onhand_raw["ItemNumber"].astype(str).str.strip()
    
    # Merge Store Names
    df_onhand = df_onhand_raw.merge(
        df_table5,
        left_on="InventoryWarehouseId",
        right_on="store number",
        how="left"
    )
    df_onhand["Outlet"] = df_onhand["outlet"].fillna(df_onhand["InventoryWarehouseId"]) # Fallback to ID if no name
    df_onhand["Outlet"] = df_onhand["Outlet"].astype(str).str.strip()

    # =====================
    # PREPARE SALES
    # =====================
    df_sales_raw["TransactionDate"] = pd.to_datetime(df_sales_raw["TransactionDate"], errors="coerce").dt.tz_localize(None)
    df_sales_raw["UnitQuantity"] = pd.to_numeric(df_sales_raw["UnitQuantity"], errors="coerce")
    
    seven_days_ago = pd.Timestamp.now() - pd.Timedelta(days=7)
    
    # Filter
    mask_sales = (
        (df_sales_raw["TransactionDate"] >= seven_days_ago) &
        (df_sales_raw["TransactionStatus"].isin(["Posted", "None"])) &
        (df_sales_raw["UnitQuantity"] < 0)
    )
    df_sales_filtered = df_sales_raw[mask_sales].copy()
    df_sales_filtered["UnitQuantity"] = df_sales_filtered["UnitQuantity"].abs()
    
    # Merge Outlet Names
    df_sales_filtered = df_sales_filtered.merge(
        df_table5,
        left_on="OperatingUnitNumber",
        right_on="store number",
        how="left"
    )
    df_sales_filtered["Outlet"] = df_sales_filtered["outlet"].fillna(df_sales_filtered["OperatingUnitNumber"])
    
    # Group by Item & Outlet
    sales_by_outlet_map = {}
    for _, row in df_sales_filtered.iterrows():
        item = str(row["ItemId"]).strip()
        outlet = str(row["Outlet"]).strip()
        qty = int(row["UnitQuantity"])
        
        sales_by_outlet_map.setdefault(item, {})
        sales_by_outlet_map[item][outlet] = sales_by_outlet_map[item].get(outlet, 0) + qty

    # =====================
    # PREPARE ITEM MASTER
    # =====================
    df_items_raw["SalesPriceDate"] = pd.to_datetime(df_items_raw["SalesPriceDate"], errors="coerce").dt.tz_localize(None)
    df_items_raw["ItemNumber"] = df_items_raw["ItemNumber"].astype(str).str.strip()
    
    # Sort by date desc to get latest price if dups
    df_items_sorted = df_items_raw.sort_values("SalesPriceDate", ascending=False).drop_duplicates("ItemNumber")
    
    # Merge with Barcode (description -> arabic name)
    # Merge with Table6 (mapping -> alias, english name, category, gofrugal)
    df_final = (
        df_items_sorted
        .merge(df_barcode_raw, left_on="ItemNumber", right_on="itemId", how="left")
        .merge(df_table6, left_on="OldItem", right_on="alias", how="left")
    )

    # =====================
    # BUILD JSON OBJECTS
    # =====================
    print("🧠 Building Products JSON...")
    
    products_list = []
    first_seen_map = {}
    
    # Pre-group onhand by item to speed up lookup
    onhand_grouped = df_onhand.groupby("ItemNumber")
    
    for _, row in df_final.iterrows():
        item_number = row["ItemNumber"]
        
        # --- Handle Names ---
        name_ar = row["description"] if pd.notna(row["description"]) else "" # from barcode table
        name_en = row["english name"] if pd.notna(row["english name"]) else ""
        
        if name_ar and name_en:
            full_name = f"{name_ar} - {name_en}"
        elif name_ar:
            full_name = name_ar
        elif name_en:
            full_name = name_en
        else:
            full_name = row["ProductSearchName"] if pd.notna(row["ProductSearchName"]) else ""

        # --- Handle GoFrugal Code ---
        gf_code = row["Item code"] # from mapping
        if pd.isna(gf_code) or gf_code == "nan":
            gf_code = ""
        else:
            try:
                gf_code = str(int(float(gf_code)))
            except:
                gf_code = str(gf_code)

        # --- Handle Alias ---
        alias = row["OldItem"] # raw dynamics
        # Check if table6 has a cleaner alias, but usually joined on OldItem=alias so it matches
        if pd.isna(alias): alias = ""

        # --- Calculate Stock & Branches ---
        branches_stock = {}
        total_warehouse_stock = 0
        
        if item_number in onhand_grouped.groups:
            group = onhand_grouped.get_group(item_number)
            for _, stk in group.iterrows():
                o_name = stk["Outlet"]
                q = int(stk["TotalAvailableQuantity"])
                if q != 0:
                    branches_stock[o_name] = branches_stock.get(o_name, 0) + q
                    
                if o_name.lower() in WAREHOUSE_NAMES:
                    total_warehouse_stock += q
        
        # --- Get Total Sales ---
        item_sales_map = sales_by_outlet_map.get(item_number, {})
        total_sales_count = sum(item_sales_map.values())

        # --- Construct Object ---
        product_obj = {
            "outlet": "Warehouse",
            "category": row["Category"] if pd.notna(row["Category"]) else "UNCATEGORIZED",
            "code": item_number,
            "gofrugal_code": gf_code,
            "alias": alias,
            "name": full_name,
            "price": float(row["SalesPrice"]) if pd.notna(row["SalesPrice"]) else 0.0,
            "stock": total_warehouse_stock,
            "sales": total_sales_count,
            "branches": branches_stock # Full object, no normalization
        }
        
        products_list.append(product_obj)
        
        # --- First Seen ---
        if pd.notna(row["SalesPriceDate"]):
            first_seen_map[item_number] = str(row["SalesPriceDate"].date())

    # =====================
    # WRITE FILES
    # =====================
    print(f"💾 Writing {len(products_list)} products to JSON...")
    
    with open(OUTPUT_PRODUCTS, "w", encoding="utf-8") as f:
        json.dump(products_list, f, ensure_ascii=False, indent=2)
        
    with open(OUTPUT_FIRST_SEEN, "w", encoding="utf-8") as f:
        json.dump(first_seen_map, f, ensure_ascii=False, indent=2)
        
    with open(OUTPUT_SALES_BY_OUTLET, "w", encoding="utf-8") as f:
        json.dump(sales_by_outlet_map, f, ensure_ascii=False, indent=2)

    print("✅ SUCCESS! All files generated directly from Dynamics.")

if __name__ == "__main__":
    main()
