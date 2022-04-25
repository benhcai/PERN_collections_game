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

  static async isAccountExist({ usernameHash }) {
    try {
      const account = await AccountDAO.findAccount({ usernameHash });
      const isAccountExists =
        typeof account.account === "undefined" ? false : true;
      return isAccountExists;
    } catch (err) {
      throw err;
    }
  }

  static findAccount({ usernameHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id, password_hash, session_id FROM accounts 
         WHERE username_hash = $1`,
        [usernameHash],
        (error, response) => {
          if (error) return reject(error);
          resolve({ account: response.rows[0] });
        }
      );
    });
  }

  static updateSessionId({ sessionId, usernameHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `
        UPDATE accounts SET session_id = $1 WHERE username_hash = $2
      `,
        [sessionId, usernameHash],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }
}

module.exports = AccountDAO;
