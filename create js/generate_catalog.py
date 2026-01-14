import os
import json
import requests
import pandas as pd
import msal
from dotenv import load_dotenv
from datetime import datetime, timedelta, timezone
from pathlib import Path

# =========================
# CONFIG
# =========================
MAPPING_FILE = "mapping.xlsx"
TABLE5_SHEET = "Table5"
TABLE6_SHEET = "Table6"

BASE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BASE_DIR.parent
OUTPUT_PRODUCTS = PROJECT_ROOT / "products.json"
OUTPUT_FIRST_SEEN = PROJECT_ROOT / "first_seen.json"
OUTPUT_SALES_BY_OUTLET = PROJECT_ROOT / "sales_by_outlet.json"

TIMEOUT = 120
BASE_URL = "https://orangepax.operations.eu.dynamics.com/data"
WAREHOUSE_NAMES = {"warehouse", "warehouse riyadh"}

DAYS_BACK = 7

# =========================
# AUTH
# =========================
def get_access_token():
    load_dotenv()

    client_id = os.getenv("CLIENT_ID")
    client_secret = os.getenv("CLIENT_SECRET")
    tenant_id = os.getenv("TENANT_ID")

    if not all([client_id, client_secret, tenant_id]):
        raise ValueError("Missing CLIENT_ID / CLIENT_SECRET / TENANT_ID")

    app = msal.ConfidentialClientApplication(
        client_id=client_id,
        client_credential=client_secret,
        authority=f"https://login.microsoftonline.com/{tenant_id}",
    )

    token = app.acquire_token_for_client(
        scopes=["https://orangepax.operations.eu.dynamics.com/.default"]
    )

    if "access_token" not in token:
        raise Exception(token)

    return token["access_token"]

# =========================
# FETCH WITH PAGINATION
# =========================
def fetch_all(token, url, label):
    headers = {"Authorization": f"Bearer {token}"}
    rows, page = [], 0

    print(f"[{label}] Starting fetch...")

    while url:
        page += 1
        r = requests.get(url, headers=headers, timeout=TIMEOUT)
        r.raise_for_status()
        data = r.json()

        rows.extend(data.get("value", []))
        print(f"   [{label}] Page {page} | Rows so far: {len(rows):,}")

        url = data.get("@odata.nextLink")

    return pd.DataFrame(rows)

# =========================
# LOAD MAPPINGS
# =========================
def load_mapping(sheet, cols):
    df = pd.read_excel(MAPPING_FILE, sheet_name=sheet)
    df = df[cols].copy()

    for c in cols:
        df[c] = df[c].astype(str).str.strip()

    return df

# =========================
# MAIN
# =========================
def main():
    token = get_access_token()

    print("Loading mappings...")
    df_table5 = load_mapping(TABLE5_SHEET, ["store number", "outlet"])
    df_table6 = load_mapping(TABLE6_SHEET, ["alias", "Category", "english name", "Item code"])

    # =====================
    # ONHAND
    # =====================
    df_onhand_raw = fetch_all(
        token,
        f"{BASE_URL}/WarehousesOnHandV2?$select=ItemNumber,InventoryWarehouseId,ProductName,TotalAvailableQuantity",
        "ONHAND"
    )

    df_onhand_raw["InventoryWarehouseId"] = df_onhand_raw["InventoryWarehouseId"].astype(str).str.strip()
    df_onhand_raw["ItemNumber"] = df_onhand_raw["ItemNumber"].astype(str).str.strip()

    df_onhand = df_onhand_raw.merge(
        df_table5,
        left_on="InventoryWarehouseId",
        right_on="store number",
        how="left"
    )

    df_onhand["Outlet"] = (
        df_onhand["outlet"]
        .fillna(df_onhand["InventoryWarehouseId"])
        .astype(str)
        .str.strip()
    )

    # =====================
    # BARCODE
    # =====================
    df_barcode = fetch_all(
        token,
        f"{BASE_URL}/RetailInventItemBarcode?$select=itemId,description",
        "BARCODE"
    ).drop_duplicates("itemId")

    # =====================
    # ITEM MASTER
    # =====================
    df_items_raw = fetch_all(
        token,
        f"{BASE_URL}/ReleasedProductsV2?$select=ItemNumber,SalesPrice,ProductSearchName,SalesPriceDate,OldItem",
        "ITEM_MASTER"
    )

    df_items_raw["SalesPriceDate"] = pd.to_datetime(df_items_raw["SalesPriceDate"], errors="coerce")
    df_items_raw["ItemNumber"] = df_items_raw["ItemNumber"].astype(str).str.strip()
    # Fix: Normalize OldItem for mapping (strip whitespace, handle nan)
    df_items_raw["OldItem"] = df_items_raw["OldItem"].astype(str).str.strip().replace("nan", "")

    # Unified Mapping: alias + Item code + dynamic code
    def get_map(col):
        if col not in df_table6.columns: return pd.DataFrame()
        # Include 'english name' if present, else empty
        cols = [col, "Category"]
        if "english name" in df_table6.columns:
            cols.append("english name")
        
        d = df_table6[cols].copy()
        d.rename(columns={col: "key"}, inplace=True)
        d["key"] = d["key"].astype(str).str.strip().replace("nan", "")
        
        if "english name" not in d.columns:
             d["english name"] = ""
             
        return d[d["key"] != ""]

    df_map = pd.concat([get_map("alias"), get_map("Item code"), get_map("dynamic code")])
    # Drop duplicates by key, keeping the first occurrence (priority: alias -> item code -> dynamic)
    df_map = df_map.drop_duplicates("key")

    df_items = (
        df_items_raw
        .sort_values("SalesPriceDate", ascending=False)
        .drop_duplicates("ItemNumber")
        .merge(df_barcode, left_on="ItemNumber", right_on="itemId", how="left")
        .merge(df_map, left_on="OldItem", right_on="key", how="left")
    )

    # =====================
    # SALES (SERVER FILTER: DATE + QTY)
    # =====================
    print("Calculating date filter...")
    cutoff_utc = (
        datetime.now(timezone.utc) - timedelta(days=DAYS_BACK)
    ).strftime("%Y-%m-%dT%H:%M:%SZ")

    sales_url = (
        f"{BASE_URL}/RetailTransactionSalesLines"
        f"?$select=OperatingUnitNumber,TransactionDate,TransactionStatus,UnitQuantity,ItemId"
        f"&$filter=TransactionDate ge {cutoff_utc} and UnitQuantity lt 0"
    )

    df_sales_raw = fetch_all(token, sales_url, "SALES")

    # =====================
    # SALES FILTER (PANDAS: STATUS)
    # =====================
    df_sales_raw["TransactionDate"] = pd.to_datetime(
        df_sales_raw["TransactionDate"], errors="coerce"
    )

    df_sales_raw["UnitQuantity"] = (
        pd.to_numeric(df_sales_raw["UnitQuantity"], errors="coerce")
        .abs()
    )

    df_sales = df_sales_raw[
        df_sales_raw["TransactionStatus"].isin(["Posted", "None"])
    ].copy()

    df_sales = df_sales.merge(
        df_table5,
        left_on="OperatingUnitNumber",
        right_on="store number",
        how="left"
    )

    df_sales["Outlet"] = (
        df_sales["outlet"]
        .fillna(df_sales["OperatingUnitNumber"])
        .astype(str)
        .str.strip()
    )

    # =====================
    # AGGREGATE SALES
    # =====================
    sales_by_outlet = {}

    for _, r in df_sales.iterrows():
        item = str(r["ItemId"]).strip()
        outlet = r["Outlet"]
        qty = int(r["UnitQuantity"])

        sales_by_outlet.setdefault(item, {})
        sales_by_outlet[item][outlet] = sales_by_outlet[item].get(outlet, 0) + qty

    # =====================
    # BUILD PRODUCTS
    # =====================
    products = []
    first_seen = {}

    onhand_grouped = df_onhand.groupby("ItemNumber")

    for _, r in df_items.iterrows():
        item_number = r["ItemNumber"]
        
        # Filter: Exclude barcodes starting with 3 or 29
        if str(item_number).startswith("3") or str(item_number).startswith("29"):
            continue

        name_ar = r["description"] if pd.notna(r["description"]) else ""
        name_en = r["english name"] if pd.notna(r["english name"]) else ""
        name = " - ".join(x for x in [name_ar, name_en] if x) or r.get("ProductSearchName", "")

        gf = r.get("Item code")
        try:
            gf = str(int(float(gf))) if pd.notna(gf) else ""
        except:
            gf = str(gf) if pd.notna(gf) else ""

        branches = {}
        total_stock = 0

        if item_number in onhand_grouped.groups:
            for _, s in onhand_grouped.get_group(item_number).iterrows():
                o = s["Outlet"]
                q = int(s["TotalAvailableQuantity"])
                branches[o] = branches.get(o, 0) + q
                if o.lower() in WAREHOUSE_NAMES:
                    total_stock += q

        total_sales = sum(sales_by_outlet.get(item_number, {}).values())

        products.append({
            "outlet": "Warehouse",
            "category": r["Category"] if pd.notna(r["Category"]) else "UNCATEGORIZED",
            "code": item_number,
            "gofrugal_code": gf,
            "alias": r["OldItem"] if pd.notna(r["OldItem"]) else "",
            "name": name,
            "price": float(r["SalesPrice"]) if pd.notna(r["SalesPrice"]) else 0.0,
            "stock": total_stock,
            "sales": total_sales,
            "branches": branches
        })

        if pd.notna(r["SalesPriceDate"]):
            first_seen[item_number] = str(r["SalesPriceDate"].date())

    # =====================
    # WRITE FILES
    # =====================
    print(f"Writing {len(products)} products...")

    OUTPUT_PRODUCTS.write_text(json.dumps(products, ensure_ascii=False, indent=2), encoding="utf-8")
    OUTPUT_FIRST_SEEN.write_text(json.dumps(first_seen, ensure_ascii=False, indent=2), encoding="utf-8")
    OUTPUT_SALES_BY_OUTLET.write_text(json.dumps(sales_by_outlet, ensure_ascii=False, indent=2), encoding="utf-8")

    print("DONE")

# =========================
if __name__ == "__main__":
    main()
