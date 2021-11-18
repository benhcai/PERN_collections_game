CREATE TABLE dragon_traits(
  dragon_id     INTEGER,
  trait_id      INTEGER,
  FOREIGN KEY (dragon_id) REFERENCES dragons(id),
  FOREIGN KEY (trait_id) REFERENCES traits(id)
);