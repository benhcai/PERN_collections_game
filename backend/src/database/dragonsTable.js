const pool = require("../../bin/databasePool");
const DragonTraitsTable = require("./dragonTraitsTable");

class DragonsTable {
  static storeDragon(dragon) {
    const { birthdate, nickname, generationId } = dragon;
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO dragons(birthdate, nickname, generation_id)
         VALUES($1, $2, $3) RETURNING dragon_id`,
        [birthdate, nickname, generationId],
        (err, response) => {
          if (err) return reject(err);
          const dragonId = response.rows[0].dragon_id;
          console.log("DragonsTable response:", dragonId);

          //prettier-ignore
          Promise.all(
            dragon.traits.map(({ traitType, traitValue }) => {
              DragonTraitsTable.storeDragonTraits({
                dragonId,
                traitType,
                traitValue,
              });
            })
            // Nothing is returned from DragonTraitsTable
          ).then(() => {
              console.log("DragonsTable dragonId:", dragonId);
              dragon.dragonId = dragonId
              resolve(dragon);
          }).catch((err) => {
              console.log("DragonsTable error: ", err);
              reject(err);
          });
        }
      );
    });
  }

  static getDragon(dragon) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT birthdate, nickname, generation_id
         FROM dragons
         WHERE dragons.dragon_id = $1`,
        [dragon.dragonId],
        (err, response) => {
          if (err) return reject(err);
          if (response.rows.length === 0)
            return reject(new Error("No dragon"));
          resolve(response.rows[0]);
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

// console.log("Test get dragon properties using ID");
// DragonsTable.getDragon({ dragonId: 1 })
//   .then((dragon) => console.log(dragon))
//   .catch((err) => console.log("error ", err));

module.exports = DragonsTable;
