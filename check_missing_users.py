import json
import re
import csv

def main():
    try:
        with open('supabase_orders.json', 'r', encoding='utf-8') as f:
            orders = json.load(f)
    except Exception as e:
        print(f"Error reading orders: {e}")
        return

    users_ids = set()
    try:
        with open('0_schema_and_profiles.sql', 'r', encoding='utf-8') as f:
            content = f.read()
            matches = re.findall(r"VALUES \('([^']+)'", content)
            for m in matches:
                users_ids.add(m)
    except Exception as e:
        print(f"Error reading schema: {e}")
        return

    missing_orders = [o for o in orders if o.get('userId') not in users_ids and o.get('userId')]
    null_orders = [o for o in orders if not o.get('userId')]

    print(f'Total orders in JSON: {len(orders)}')
    print(f'Found {len(users_ids)} users in schema SQL')
    print(f'Orders with unmapped users (Foreign Key violation expected): {len(missing_orders)}')
    print(f'Orders with NULL users: {len(null_orders)}')
    print(f'Total expected omitted by Supabase constraints: {len(missing_orders) + len(null_orders)}')
    
    expected_import = len(orders) - (len(missing_orders) + len(null_orders))
    print(f'Expected successful imports: {expected_import}')

if __name__ == '__main__':
    main()
