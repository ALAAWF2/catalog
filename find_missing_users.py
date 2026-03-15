import pandas as pd
import json

try:
    # 1. Load Firebase users
    with open(r'C:\Users\ALAA-ORANGE\Desktop\catalog\firebase_users_export.json', 'r', encoding='utf-8') as f:
        firebase_users = json.load(f)
        
    firebase_emails = {user['email'].lower(): user for user in firebase_users}
    print(f"Total users in Firebase: {len(firebase_emails)}")

    # 2. Load Excel users
    excel_path = r"C:\Users\ALAA-ORANGE\Desktop\catalog\usersssss-جدول البضاعة.xlsx"
    df = pd.read_excel(excel_path)
    
    # Clean excel emails (lowercase, strip whitespace)
    df['Email'] = df['Email'].str.lower().str.strip()
    
    excel_emails = set(df['Email'].dropna())
    print(f"Total users in Excel: {len(excel_emails)}")
    
    # 3. Find missing users
    missing_in_excel = []
    for email, user_data in firebase_emails.items():
        if email not in excel_emails:
            missing_in_excel.append(email)
            
    # Write report
    with open('missing_users_report.txt', 'w', encoding='utf-8') as f:
        f.write(f"Total Firebase Users: {len(firebase_emails)}\n")
        f.write(f"Total Excel Users: {len(excel_emails)}\n")
        f.write(f"\n--- Users in Firebase but MISSING in Excel ({len(missing_in_excel)}) ---\n")
        for email in missing_in_excel:
            f.write(f"- {email}\n")
            
    print("Report written to missing_users_report.txt")

except Exception as e:
    print(f"Error: {e}")
