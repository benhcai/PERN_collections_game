const pool = require("../../api/databasePool");
const TraitsDAO = require("../traits/traits.dao");

class DragonTraitsDAO {
  static async storeDragonTraits({
    dragonId,
    traitType,
    traitValue,
  }) {
    return new Promise((resolve, reject) => {
      const { traitId } = TraitsDAO.getTraitId({
        traitType,
        traitValue,
      });
      pool.query(
        `INSERT INTO dragon_traits(trait_id, dragon_id)
          VALUES ($1, $2)`,
        [traitId, dragonId],
        (err, response) => {
          if (err) return reject(err);
          resolve(response);
        }
      );

      // TraitsDAO.getTraitId({ traitType, traitValue }).then(
      //   ({ traitId }) => {
      //     pool.query(
      //       `INSERT INTO dragon_traits(trait_id, dragon_id)
      //       VALUES ($1, $2)`,
      //       [traitId, dragonId],
      //       (err, response) => {
      //         if (err) return reject(err);
      //         resolve(response);
      //       }
      //     );
      //   }
      // );
    });
  }
}

module.exports = DragonTraitsDAO;
