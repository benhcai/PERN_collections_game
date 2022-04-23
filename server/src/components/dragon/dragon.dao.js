const pool = require("../../api/databasePool");
const DragonTraitsDAO = require("../dragonTraits/dragonTraits.dao");

class DragonDAO {
  static storeDragon(dragon) {
    const { birthdate, nickname, generationId, traits } = dragon;
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO dragons(birthdate, nickname, generation_id)
         VALUES($1, $2, $3) RETURNING dragon_id`,
        [birthdate, nickname, generationId],
        async (err, response) => {
          if (err) return reject(err);
          const dragonId = response.rows[0].dragon_id;
          console.log("DragonDAO response:", dragonId);

          // //prettier-ignore
          // Promise.all(
          //   traits.map(({ traitType, traitValue }) => {
          //     DragonTraitsDAO.storeDragonTraits({
          //       dragonId,
          //       traitType,
          //       traitValue,
          //     });
          //   })
          //   // Nothing is returned from DragonTraitsDAO
          // ).then(() => {
          //     console.log("DragonDAO dragonId:", dragonId);
          //     dragon.dragonId = dragonId
          //     resolve(dragon);
          // }).catch((err) => {
          //     console.log("DragonDAO error: ", err);
          //     reject(err);
          // });

          try {
            await traits.map(({ traitType, traitValue }) =>
              DragonTraitsDAO.storeDragonTraits({
                dragonId,
                traitType,
                traitValue,
              })
            );
            console.log("DragonDAO dragonId:", dragonId);
            dragon.dragonId = dragonId;
            resolve(dragon);
          } catch (err) {
            console.log("DragonDAO", err);
            reject(err);
          }
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

module.exports = DragonDAO;
