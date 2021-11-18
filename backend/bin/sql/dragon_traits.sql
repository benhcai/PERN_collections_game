CREATE TABLE dragon_traits(
  dragon_id     INTEGER,
  trait_id      INTEGER,
  FOREIGN KEY (dragon_id) REFERENCES dragons(dragon_id),
  FOREIGN KEY (trait_id) REFERENCES traits(trait_id)
);