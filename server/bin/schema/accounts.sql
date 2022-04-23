CREATE TABLE accounts(
  id              SERIAL PRIMARY KEY,
  username_hash   CHARACTER(64),
  password_hash   CHARACTER(64)
);