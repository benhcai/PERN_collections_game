// Class for adding generation fields to sql database
const pool = require("../../../bin/databasePool");

// The class acts as a namespace to collect methods.
class GenerationsTable {
  static storeGeneration(generation) {
    return new Promise((resolve, reject) => {
      // Use (the authenticated) postgres pool to push records into generations table.
      // When the put is complete, psql will return the id of the new record
      // which will then be returned to the app.
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
