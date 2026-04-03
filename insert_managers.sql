-- Create Area Managers

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'obieda.sebaee@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'obieda.sebaee@orangebedbath.com', 
          crypt('Pvoo', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'obieda.sebaee@orangebedbath.com')::jsonb, 
          'email', 'obieda.sebaee@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('Pvoo', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'obieda.sebaee@orangebedbath.com', 
        'ALL', -- as manager 
        'عبيدة السباعي', 
        'manager', 
        '["04-Andalos Mall", "09-Al-Salam Mall", "18-Al_Khayyat Center", "53-Al Basateen Mall", "57-Sauq7"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["04-Andalos Mall", "09-Al-Salam Mall", "18-Al_Khayyat Center", "53-Al Basateen Mall", "57-Sauq7"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'sh.alamri@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'sh.alamri@orangebedbath.com', 
          crypt('62UB', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'sh.alamri@orangebedbath.com')::jsonb, 
          'email', 'sh.alamri@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('62UB', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'sh.alamri@orangebedbath.com', 
        'ALL', -- as manager 
        'شريفة العمري', 
        'manager', 
        '["05-Haifa Mall", "07-Arab Mall", "48 - Jeddah Park", "56- Aziz Mall 2"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["05-Haifa Mall", "07-Arab Mall", "48 - Jeddah Park", "56- Aziz Mall 2"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'mehyar.s@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'mehyar.s@orangebedbath.com', 
          crypt('Smdc', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'mehyar.s@orangebedbath.com')::jsonb, 
          'email', 'mehyar.s@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('Smdc', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'mehyar.s@orangebedbath.com', 
        'ALL', -- as manager 
        'المنطقة الغربية', 
        'manager', 
        '["06-Red Sea Mall", "13-Al-Yasmin Mall", "54-THE VILLAGE"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["06-Red Sea Mall", "13-Al-Yasmin Mall", "54-THE VILLAGE"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'radwan@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'radwan@orangebedbath.com', 
          crypt('TUdJ', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'radwan@orangebedbath.com')::jsonb, 
          'email', 'radwan@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('TUdJ', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'radwan@orangebedbath.com', 
        'ALL', -- as manager 
        'رضوان عطيوي', 
        'manager', 
        '["08-Makkah Mall", "20-Sitten Street Makkah", "55- Jabl Omar"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["08-Makkah Mall", "20-Sitten Street Makkah", "55- Jabl Omar"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'm.kello@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'm.kello@orangebedbath.com', 
          crypt('c7Yw', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'm.kello@orangebedbath.com')::jsonb, 
          'email', 'm.kello@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('c7Yw', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'm.kello@orangebedbath.com', 
        'ALL', -- as manager 
        'محمدكلو', 
        'manager', 
        '["1114-Malgha Mall", "1115-Alrabie Mall", "12-Al_Hamra Mall", "29-Al Nakheel Mall Riyadh", "32-Atyaf Mall Riyadh", "38-Al_Riyadh Park", "45- Riyadh Gallery Mall", "46-Khaleej Mall Riyadh", "51-Park Avenue Riyadh"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["1114-Malgha Mall", "1115-Alrabie Mall", "12-Al_Hamra Mall", "29-Al Nakheel Mall Riyadh", "32-Atyaf Mall Riyadh", "38-Al_Riyadh Park", "45- Riyadh Gallery Mall", "46-Khaleej Mall Riyadh", "51-Park Avenue Riyadh"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'bakr@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'bakr@orangebedbath.com', 
          crypt('ZSgy', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'bakr@orangebedbath.com')::jsonb, 
          'email', 'bakr@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('ZSgy', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'bakr@orangebedbath.com', 
        'ALL', -- as manager 
        'منطقة الطائف', 
        'manager', 
        '["11-Jouri Mall", "14-Al Kamal Mall"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["11-Jouri Mall", "14-Al Kamal Mall"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'jalel.h@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'jalel.h@orangebedbath.com', 
          crypt('jXOC', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'jalel.h@orangebedbath.com')::jsonb, 
          'email', 'jalel.h@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('jXOC', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'jalel.h@orangebedbath.com', 
        'ALL', -- as manager 
        'عبد الجليل الحبال', 
        'manager', 
        '["15-Riyadh Othaim Mall", "25-Rabwa Othaim Mall", "39-Salam MAll Riyadh", "50-Meem Plaza Riyadh"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["15-Riyadh Othaim Mall", "25-Rabwa Othaim Mall", "39-Salam MAll Riyadh", "50-Meem Plaza Riyadh"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'jihad@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'jihad@orangebedbath.com', 
          crypt('2yT7', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'jihad@orangebedbath.com')::jsonb, 
          'email', 'jihad@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('2yT7', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'jihad@orangebedbath.com', 
        'ALL', -- as manager 
        'جهاد ايوبي', 
        'manager', 
        '["16-Ehsa Othaim Mall", "27-Dhahran Mall khobar", "28-Al Nakheel Mall Dammam", "36-Al jubail Mall", "42-Dareen Mall Dammam", "49-AlAhsa Mall"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["16-Ehsa Othaim Mall", "27-Dhahran Mall khobar", "28-Al Nakheel Mall Dammam", "36-Al jubail Mall", "42-Dareen Mall Dammam", "49-AlAhsa Mall"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'kha.als@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'kha.als@orangebedbath.com', 
          crypt('ReSv', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'kha.als@orangebedbath.com')::jsonb, 
          'email', 'kha.als@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('ReSv', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'kha.als@orangebedbath.com', 
        'ALL', -- as manager 
        'خليل الصانع', 
        'manager', 
        '["17-Arar Othaim Mall", "22-Tabuk Park", "23-Alia Mall Madinah", "24-Yanbu Dana Mall", "26-Al-Noor Mall Madinah", "44-Al-Jouf Center"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["17-Arar Othaim Mall", "22-Tabuk Park", "23-Alia Mall Madinah", "24-Yanbu Dana Mall", "26-Al-Noor Mall Madinah", "44-Al-Jouf Center"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'amani.a@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'amani.a@orangebedbath.com', 
          crypt('qiBK', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'amani.a@orangebedbath.com')::jsonb, 
          'email', 'amani.a@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('qiBK', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'amani.a@orangebedbath.com', 
        'ALL', -- as manager 
        'اماني عسيري', 
        'manager', 
        '["1906-LAVANDA PARK", "21-Abha Al_Rashid Mall New", "41-Khamis Avenue", "43-Mujan Park", "52-Al_Baha Mall"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["1906-LAVANDA PARK", "21-Abha Al_Rashid Mall New", "41-Khamis Avenue", "43-Mujan Park", "52-Al_Baha Mall"]'::jsonb;
    END $$;
    

    DO $$
    DECLARE
      new_user_id uuid := gen_random_uuid();
      user_exists uuid;
    BEGIN
      SELECT id INTO user_exists FROM auth.users WHERE email = 'abd.serdah@orangebedbath.com';
      IF user_exists IS NULL THEN
        INSERT INTO auth.users (
          instance_id, id, aud, role, email, encrypted_password, 
          email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, 
          created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
          '00000000-0000-0000-0000-000000000000', new_user_id, 'authenticated', 'authenticated', 'abd.serdah@orangebedbath.com', 
          crypt('RvvL', gen_salt('bf')),
          now(), null, null, '{"provider":"email","providers":["email"]}', '{}', 
          now(), now(), '', '', '', ''
        );
        
        INSERT INTO auth.identities (id, user_id, identity_data, provider, provider_id, last_sign_in_at, created_at, updated_at)
        VALUES (
          gen_random_uuid(), new_user_id, format('{"sub":"%s","email":"%s"}', new_user_id::text, 'abd.serdah@orangebedbath.com')::jsonb, 
          'email', 'abd.serdah@orangebedbath.com', null, now(), now()
        );
      ELSE
        new_user_id := user_exists;
        UPDATE auth.users SET encrypted_password = crypt('RvvL', gen_salt('bf')) WHERE id = new_user_id;
      END IF;

      -- UPSERT INTO PROFILES
      INSERT INTO public.profiles (id, email, warehouse, mall, role, managed_outlets)
      VALUES (
        new_user_id::text, 
        'abd.serdah@orangebedbath.com', 
        'ALL', -- as manager 
        'عبدالله السرداح', 
        'manager', 
        '["19-Hail Othaim Mall", "30-Tala Mall Riyadh", "40-Hayat Mall Riyadh", "47-Al-Nakheel Plaza"]'::jsonb
      )
      ON CONFLICT (id) DO UPDATE SET 
        role = 'manager',
        managed_outlets = '["19-Hail Othaim Mall", "30-Tala Mall Riyadh", "40-Hayat Mall Riyadh", "47-Al-Nakheel Plaza"]'::jsonb;
    END $$;
    