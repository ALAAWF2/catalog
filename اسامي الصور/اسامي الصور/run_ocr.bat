@echo off
rem Double-click to run the product image converter on this folder
cd /d "%~dp0"
.venv\Scripts\python.exe convert_products.py %*
echo.
pause
