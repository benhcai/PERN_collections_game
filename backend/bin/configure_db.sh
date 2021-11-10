#!/bin/zsh

# List databases
# psql -l

# Long-form list
# ls -l
# Add executable permissions
# chmod +x config.sh

# export PGPASSWORD="node_password"

# Delete existing database with specified owner
dropdb -U node_user dragonstackdb
# Create new database with owner as node_user (username to connect as)
createdb -U node_user dragonstackdb

echo "Configuring database: dragonstackdb..."

# Connect, with specified user, to database
psql -U node_user dragonstackdb < ./bin/sql/generations.sql
psql -U node_user dragonstackdb < ./bin/sql/dragons.sql
psql -U node_user dragonstackdb < ./bin/sql/traits.sql

node ./bin/insertTraits.js

echo "Configure complete: dragonstackdb..."

# Show configured tables
# \d
# \d+ dragon