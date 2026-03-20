# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Arabic-localized (RTL) product catalog system for a retail company ("Orange Pax") that fetches inventory data from Microsoft Dynamics 365 and serves it as a static web app with Supabase authentication and order management.

## Running the Application

**Frontend:** No build step — open any `.html` file directly in a browser. The app is static HTML with embedded JS.

**Daily catalog refresh (Windows):**
```batch
daily_update.bat
```

This runs `create js/generate_catalog.py` which fetches from Dynamics 365 and regenerates all JSON data files, then commits and pushes via git.

**Python dependencies for catalog generation:**
```bash
pip install pandas openpyxl requests python-dotenv msal
```

**Node.js migration utilities** (one-time Supabase migration scripts only):
```bash
npm install dotenv pg @supabase/supabase-js
```

**Required `.env` file** (not in repo):
```
CLIENT_ID=<Azure AD client ID>
CLIENT_SECRET=<Azure AD secret>
TENANT_ID=<Azure tenant ID>
DATABASE_URL=<Supabase PostgreSQL connection string>
```

## Architecture

### Data Pipeline
```
Microsoft Dynamics 365 OData API
  ├─ WarehousesOnHandV2       (inventory by warehouse/outlet)
  ├─ RetailInventItemBarcode  (barcode → item mappings)
  ├─ ReleasedProductsV2       (product master data)
  └─ RetailTransactionSalesLines (last 7 days sales)
        ↓
  create js/generate_catalog.py
        ├─ OAuth via MSAL
        ├─ Maps warehouse codes → outlet names (mapping.xlsx)
        ├─ Applies categories (category2026.xlsx)
        └─ Outputs: products.json, sales_by_outlet.json, first_seen.json
        ↓
  Static JSON files (committed to repo, served with HTML)
```

### Frontend Pages
- **`index.html`** — Primary catalog: product browsing, cart, barcode printing, Excel export, order submission
- **`outlet-orders-supabase.html`** — Order management (Supabase-backed)
- **`cross-outlet-search.html`** — Search products across all outlets
- **`upload_tool.html`** — Product image upload utility
- **`orders.html`** — Legacy Firebase order view (being phased out)

### Authentication & Storage
- **Supabase** (`sufeqdvooqkolghflhta.supabase.co`) handles user auth and the `orders` table
- Session auto-expires after 1 hour of inactivity
- **Firebase** is legacy — migration to Supabase is in progress; avoid adding new Firebase code

### Key Data Files (auto-generated daily)
- `products.json` — Full product catalog (~5,900 items, 3.8MB)
- `sales_by_outlet.json` — 7-day sales per product per outlet
- `first_seen.json` — First-appearance timestamps (drives "new arrival" badges)
- `extras.json` — Extra supplies with Arabic labels (manually maintained)

### Mapping/Config Files
- `mapping.xlsx` — Warehouse code → outlet name mapping (Table5, Table6 sheets)
- `create js/category2026.xlsx` — Product category assignment rules

## Code Patterns

### All HTML files follow this pattern:
1. Supabase client initialized with hardcoded `SUPABASE_URL` / `SUPABASE_ANON_KEY`
2. Local JSON files fetched on load
3. User authenticated via Supabase before data is shown
4. UI rendered in Arabic (RTL, font: Tajawal from Google Fonts)

### Key functions in `index.html`:
- `loadLocalCatalog()` — loads products.json, applies blocked-product filter
- `renderProducts()` — renders product cards from filtered data
- `handleAuthUser(user)` — resolves user → outlet/gallery from Supabase profile
- `submitOrder()` — writes cart to Supabase `orders` table
- `exportGuestExcel(withImages)` — exports cart as Excel using ExcelJS
- `mergeKitData()` — handles kit/bundle product logic

## Localization
- UI is fully Arabic (Modern Standard Arabic, RTL layout)
- All user-visible strings should be in Arabic
- Product names and category labels are Arabic
- Code identifiers and technical attributes remain in English

## CI/CD
- `.github/workflows/update-products.yml` — triggered by changes to `cattemp.xlsx`, runs Python catalog refresh on Ubuntu
- `daily_update.bat` — local Windows automation for the same pipeline
- Commit message format for auto-updates: `Auto-update: Daily catalog refresh <Day> <Date>`
