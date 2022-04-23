const pool = require("../../api/databasePool");

class AccountDAO {
  static storeAccount({ usernameHash, passwordHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO accounts(username_hash, password_hash) VALUES($1, $2)",
        [usernameHash, passwordHash],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  static findAccount({ usernameHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id, password_hash FROM accounts 
         WHERE username_hash = $1`,
        [usernameHash],
        (error, response) => {
          if (error) return reject(error);
          resolve({ account: response.rows[0] });
        }
      );
    });
  }
}

module.exports = AccountDAO;
