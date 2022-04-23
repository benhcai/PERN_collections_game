#!/bin/zsh

# export PGPASSWORD="node_password"

# Delete existing database with specified owner
dropdb -U node_user dragonstackdb
# Create new database with owner as node_user (username to connect as)
createdb -U node_user dragonstackdb

echo "Configuring database: dragonstackdb..."

# Load Postgres SQL statements,
# Connect, with specified user, to databases
psql -U node_user dragonstackdb < ./bin/schema/accounts.sql
psql -U node_user dragonstackdb < ./bin/schema/generations.sql
psql -U node_user dragonstackdb < ./bin/schema/dragons.sql
psql -U node_user dragonstackdb < ./bin/schema/traits.sql
psql -U node_user dragonstackdb < ./bin/schema/dragon_traits.sql

node ./bin/seeds/insertTraits.js

echo "Configure complete: dragonstackdb..."
