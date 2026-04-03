import pandas as pd
import random
import string
import json

df = pd.read_excel('managers emails.xlsx')

managers = {}
# Columns: outlet, area managers, email, outlet email
for idx, row in df.iterrows():
    outlet = str(row.get('outlet')).strip()
    name = str(row.get('area managers')).strip()
    email = str(row.get('email')).strip().lower()
    
    if email == 'nan' or not email:
        continue
        
    if email not in managers:
        # Generate 4-char password
        password = ''.join(random.choices(string.ascii_letters + string.digits, k=4))
        managers[email] = {
            'name': name,
            'password': password,
            'outlets': []
        }
    if outlet != 'nan' and outlet:
        managers[email]['outlets'].append(outlet)

# 1. Output Managers_Access.xlsx
out_data = []
for email, data in managers.items():
    out_data.append({
        'Email': email,
        'Name': data['name'],
        'Password': data['password'],
        'Outlets': ", ".join(data['outlets'])
    })
    
out_df = pd.DataFrame(out_data)
out_df.to_excel('Managers_Access.xlsx', index=False)

# 2. Output SQL
sql_statements = []
for email, data in managers.items():
    pwd = data['password']
    malls_json = json.dumps(data['outlets']).replace("'", "''")
    
    sql = f"""
    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = '{email}';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', '{email}', 
          crypt('{pwd}', gen_salt('bf')),
          now(), null, null, '{{\"provider\":\"email\",\"providers\":[\"email\"]}}', '{{}}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{{"sub":"%s","email":"%s"}}', new_user_id::text, '{email}')::jsonb, 
          'email', {email!r}, null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('{pwd}', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        '{email}', 
        'ALL', -- as manager 
        '{data['name']}', 
        'manager', 
        '{malls_json}'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '{malls_json}'::jsonb;
    END $$;
    """
    sql_statements.append(sql)

with open('insert_managers.sql', 'w', encoding='utf-8') as f:
    f.write("-- Create Area Managers\n")
    f.write("\n".join(sql_statements))
    
print("SQL and Excel created successfully.")
