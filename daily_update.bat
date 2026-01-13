@echo off
cd /d "C:\Users\ALAA-ORANGE\Desktop\catalog"

echo [%date% %time%] Starting daily catalog update... >> update_log.txt

echo Running catalog generation script...
python "create js/generate_catalog.py" >> update_log.txt 2>&1
if %errorlevel% neq 0 (
    echo Error running python script >> update_log.txt
    exit /b %errorlevel%
)

echo Regenerating image report...
python generate_image_report.py >> update_log.txt 2>&1

echo Pushing to git...
git add . >> update_log.txt 2>&1
git commit -m "Auto-update: Daily catalog refresh %date%" >> update_log.txt 2>&1
git push >> update_log.txt 2>&1

echo [%date% %time%] Update completed. >> update_log.txt
