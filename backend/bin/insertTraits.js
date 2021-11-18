const pool = require("./databasePool");
const TRAITS = require("../data/traits.json");

TRAITS.forEach((trait) => {
  const traitType = trait.type;
  const traitValue = trait.values;
  traitValue.forEach((traitValue) => {
    pool.query(
      `INSERT INTO traits(trait_type, trait_value) 
       VALUES($1, $2)
       RETURNING trait_id`,
      // referring to $1, $2
      [traitType, traitValue],
      (err, res) => {
        if (err) console.log(err);
        // const traitId = res.rows[0].traitId;
        console.log("Inserted trait", traitType, traitValue);
      }
    );
  });
});
