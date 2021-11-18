const pool = require("../../../bin/databasePool");
const DragonTraitsTable = require("../dragon_traits/dragon_traits_table");

class DragonsTable {
  static storeDragon(dragon) {
    const { birthdate, nickname, generationId } = dragon;
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO dragons(birthdate, nickname, generation_id)
         VALUES($1, $2, $3) RETURNING id`,
        [birthdate, nickname, generationId],
        (err, response) => {
          if (err) return reject(err);
          const dragonId = response.rows[0].id;
          console.log("store dragon response", response);

          Promise.all(
            dragon.traits.map(({ traitType, traitValue }) => {
              DragonTraitsTable.storeDragonTraits({
                dragonId,
                traitType,
                traitValue,
              });
            })
          )
            .then((res) => {
              resolve({ dragonId });
            })
            .catch((err) => reject(err));
        }
      );
    });
  }
}

/////////////////////////////////////////////////////////////
// // Query Test
// const Generation = require("../../components/generation");
// const generation = new Generation();
// DragonsTable.storeDragon(generation.newDragon()).then((response) =>
//   console.log(response)
// );

module.exports = DragonsTable;