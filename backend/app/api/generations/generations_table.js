// Class for adding generation fields to sql database
const pool = require("../../../bin/databasePool");

// Use class as namespace to collect methods
class GenerationsTable {
  static storeGeneration(generation) {
    return new Promise((resolve, reject) => {
      // Note it is 1 based indexing
      // postgres syntax helps with sql injection
      pool.query(
        "INSERT INTO generations(expiration) VALUES($1) RETURNING id",
        [generation.expiration],
        (err, response) => {
          if (err) return reject(err);
          const generationId = response.rows[0].id;
          resolve({ generationId });
        }
      );
    });
  }
}

module.exports = GenerationsTable;
