const pool = require("../../bin/databasePool");
const TraitsTable = require("./traitsTable");
const TraitTable = require("./traitsTable");

class DragonTraitsTable {
  static storeDragonTraits({ dragonId, traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      TraitsTable.getTraitId({ traitType, traitValue }).then(
        ({ traitId }) => {
          pool.query(
            `INSERT INTO dragon_traits(trait_id, dragon_id)
            VALUES ($1, $2)`,
            [traitId, dragonId],
            (err, response) => {
              if (err) return reject(err);
              resolve(response);
            }
          );
        }
      );
    });
  }
}

// DragonTraitsTable.storeDragonTraits({
//   // dragonId: 1,
//   traitType: "ability",
//   traitValue: "fire",
// }).then((response) => console.log(response));

module.exports = DragonTraitsTable;
