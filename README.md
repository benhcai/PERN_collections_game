# PERN_dragons

## EXPLANATION OF DIRECTORIES

### app

Is the application layer an contains all code related to the operation and initialization of the app.

Includes the dragon class, generation class, engine setup, and their data models.

### bin

"Binary files", contians code for execution and lower-level operations.

### data

Files containing data for the app.

# NOTES

### PostGres

Postgres uses 1 based indexing.
The postgres syntax helps prevent sql injection:
**./GenerationsTable:**
"INSERT INTO generations(expiration) VALUES($1) RETURNING id",

; is required at the end of the commands in the cli

#### Naming Convention for PostGres

PostgreSQL stores all table and columns (that are not in double quotes) in lowercase, so the above would be stored as product rather than Product, if you run a select with uppercase (PascalCase) against Postgres, the query will fail saying the column doesn’t exist. Thus, the Postgres convention for tables and columns, is to name everything lowercase with under scores. The above would become:

### sql

VARCHAR

- without specified length = any length

A table has records (rows) and fields (columns).

### trait-dragons tableo:

Storing json as serialzed (stringified) property is frowned upon. It would slow down data crawling and a user would have to unstringify the value.

Associate each trait with a id.
Store traits in database to reduce erroro when referencing traits.
