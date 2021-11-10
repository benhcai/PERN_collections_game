const pool = require("../../../bin/databasePool");

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
          resolve({ dragonId });
        }
      );
    });
  }
}

module.exports = DragonsTable;
