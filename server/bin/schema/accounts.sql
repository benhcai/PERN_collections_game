CREATE TABLE accounts(
  id              SERIAL PRIMARY KEY,
  username_hash   CHARACTER(64),
  password_hash   CHARACTER(64),
  -- why length 36 1,30,00.00
  session_id      CHARACTER(36)
);