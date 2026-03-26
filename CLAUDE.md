# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Arabic-localized (RTL) product catalog system for a retail company ("Orange Pax") that fetches inventory data from Microsoft Dynamics 365 and serves it as a static web app with Supabase authentication, order management, and maintenance request tracking.

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

**Required `.env` file** (not in repo, located in `create js/`):
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
        ├─ Resolves product images (multiple candidate patterns)
        └─ Outputs: products.json, sales_by_outlet.json, first_seen.json
        ↓
  Static JSON files (committed to repo, served with HTML)
```

### Frontend Pages
- **`index.html`** — Primary catalog: product browsing, cart, barcode printing, Excel export, order submission
- **`outlet-orders-supabase.html`** — Order management (Supabase-backed)
- **`cross-outlet-search.html`** — Search products across all outlets
- **`maintenance.html`** — User-facing maintenance request submission and tracking
- **`maintenance-admin.html`** — Admin dashboard for maintenance requests (repair costs, invoices, priorities)
- **`upload_tool.html`** — Product image upload utility
- **`orders.html`** — Order viewing and management

### Maintenance Module
- **User side** (`maintenance.html`): Submit maintenance requests with images, view request status/admin replies
- **Admin side** (`maintenance-admin.html`): View all requests, filter by status/priority/outlet, reply with images, set repair cost, upload invoice images, export to Excel
- **Admin access**: Restricted to `belal@orangebedbath.com`
- **Supabase table**: `maintenance_requests` (fields: id, created_at, status, priority, description, images, admin_reply, repair_cost, admin_images, mall)
- **Supabase storage bucket**: `maintenance-images`

### Authentication & Storage
- **Supabase** (`sufeqdvooqkolghflhta.supabase.co`) handles user auth, `orders` table, `maintenance_requests` table, and file storage
- **Supabase tables**: `profiles` (user_id, email, mall, warehouse, role), `orders`, `maintenance_requests`
- Session auto-expires after 1 hour of inactivity
- User roles and outlet/mall assignments fetched from `profiles` table
- **Firebase** is fully deprecated — migration to Supabase is complete; do not add Firebase code

### Key Data Files (auto-generated daily)
- `products.json` — Full product catalog (~5,900 items, 3.8MB)
- `sales_by_outlet.json` — 7-day sales per product per outlet
- `first_seen.json` — First-appearance timestamps (drives "new arrival" badges)
- `extras.json` — Extra supplies with Arabic labels (manually maintained)

### Mapping/Config Files
- `mapping.xlsx` — Warehouse code → outlet name mapping (Table5, Table6 sheets)
- `create js/category2026.xlsx` — Product category assignment rules
- `itemsfornotshow.xlsx` — Blocked products list (filtered out during catalog load)

### Directory Notes
- **`create js/`** — Despite the name, contains the Python catalog generator + Excel config files + `.env` (not JavaScript)
- **`firebase-to-supabase/`** — One-time migration utility scripts (Node.js), excluded from git
- **`images/`** — Product images (`.webp` format), committed to repo

### Repository Hygiene
Debug scripts, migration utilities, benchmark files, backup HTML copies, and generated reports are excluded from git via `.gitignore`. They may exist locally but are not tracked. Only core application files are committed.

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
