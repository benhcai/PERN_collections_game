const pool = require("../../api/databasePool");

class GenerationDAO {
  static storeGeneration(generation) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO generations(expiration_time) VALUES($1) RETURNING generation_id",
        [generation.expirationTime],
        (err, response) => {
          if (err) return reject(err);
          const generationId = response.rows[0].generation_id;
          resolve({ generationId });
        }
      );
    });
  }
}

module.exports = GenerationDAO;
