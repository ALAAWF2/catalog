import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
import json

# Fetch the service account key JSON file contents
# You must provide the path to your service account key file here
cred = credentials.Certificate('firebase-service-account.json')
firebase_admin.initialize_app(cred)

def export_users():
    print("Starting user export...")
    users = []
    # Start listing users from the beginning, 1000 at a time.
    page = auth.list_users()
    while page:
        for user in page.users:
            users.append({
                'uid': user.uid,
                'email': user.email,
                'email_verified': user.email_verified,
                'phone_number': user.phone_number,
                'display_name': user.display_name,
                'disabled': user.disabled,
            })
        print(f"Fetched {len(users)} users so far...")
        # Get next batch of users.
        page = page.get_next_page()
    
    with open('firebase_users_export.json', 'w', encoding='utf-8') as f:
        json.dump(users, f, ensure_ascii=False, indent=4)
        print(f"Successfully exported {len(users)} users to firebase_users_export.json")

if __name__ == '__main__':
    export_users()
