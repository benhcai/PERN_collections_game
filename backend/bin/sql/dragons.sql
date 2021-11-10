CREATE TABLE dragons(
  id                SERIAL PRIMARY KEY,
  birthdate         TIMESTAMP NOT NULL,
  nickname          VARCHAR(64),
  "generationId"    INTEGER,
  FOREIGN KEY ("generationId") REFERENCES generations(id)
)
