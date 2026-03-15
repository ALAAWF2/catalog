-- Safely map legacy profile/order IDs to auth.users IDs by matching email.
-- This script assumes profiles.id and orders.user_id are TEXT columns.

BEGIN;

-- 1) Build a stable mapping BEFORE any updates
CREATE TEMP TABLE tmp_profile_id_map AS
SELECT
    p.id AS old_id,
    u.id::text AS new_id,
    lower(p.email) AS email_key
FROM public.profiles p
JOIN auth.users u
  ON lower(p.email) = lower(u.email)
WHERE p.id <> u.id::text;

-- 2) Drop FK temporarily to avoid update-order dependency issues
ALTER TABLE public.orders
DROP CONSTRAINT IF EXISTS orders_user_id_fkey;

-- 3) Update orders first (old legacy id -> auth uuid text)
UPDATE public.orders o
SET user_id = m.new_id
FROM tmp_profile_id_map m
WHERE o.user_id = m.old_id;

-- 4) Update profiles id to match auth.users id
UPDATE public.profiles p
SET id = m.new_id
FROM tmp_profile_id_map m
WHERE p.id = m.old_id;

-- 5) Recreate FK
ALTER TABLE public.orders
ADD CONSTRAINT orders_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES public.profiles(id)
ON DELETE SET NULL;

COMMIT;

-- Optional quick check:
-- SELECT COUNT(*) AS unmatched_orders
-- FROM public.orders o
-- LEFT JOIN public.profiles p ON p.id = o.user_id
-- WHERE o.user_id IS NOT NULL AND p.id IS NULL;
