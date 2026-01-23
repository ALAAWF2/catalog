@echo off
cd /d "C:\Users\ALAA-ORANGE\Desktop\catalog"

echo [%date% %time%] Starting daily catalog update... >> update_log.txt

:: 1. Environment Check
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo CRITICAL: Python not found in PATH! >> update_log.txt
    exit /b 1
)
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo CRITICAL: Git not found in PATH! >> update_log.txt
    exit /b 1
)

:: 2. Generate Catalog (Includes Phase 5: Image Pre-calculation)
echo Running catalog generation script...
python "create js/generate_catalog.py" >> update_log.txt 2>&1
if %errorlevel% neq 0 (
    echo Error running generate_catalog.py >> update_log.txt
    exit /b %errorlevel%
)

:: 3. Generate Report
echo Regenerating image report...
python generate_image_report.py >> update_log.txt 2>&1

:: 4. Git Sync (Safe Mode)
echo Pushing to git...
:: Explicitly add ONLY the data files we want to track
git add products.json sales_by_outlet.json first_seen.json products_images_report.xlsx index.html >> update_log.txt 2>&1
git commit -m "Auto-update: Daily catalog refresh %date%" >> update_log.txt 2>&1
git push >> update_log.txt 2>&1

echo [%date% %time%] Update completed. >> update_log.txt
