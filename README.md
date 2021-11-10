# PERN_dragons

## Explanation of directiories

### app

Is the application layer an contains all code related to the operation and initialization of the app.

Includes the dragon class, generation class, engine setup, and their data models.

### bin

"Binary files", contians code for execution and lower-level operations.

### data

Files containing data for the app.

## PostGres

Postgres uses 1 based indexing.
The postgres syntax helps prevent sql injection:
**./GenerationsTable:**
"INSERT INTO generations(expiration) VALUES($1) RETURNING id",

### sql

VARCHAR

- without specified length = any length

A table has records (rows) and fields (columns).

### Trait-dragons:

Storing json as serialzed (stringified) property is frowned upon. It would slow down data crawling and a user would have to unstringify the value.

Associate each trait with a id.
Store traits in database to reduce erroro when referencing traits.
