const AccountDAO = require("./account.dao");
const makeHash = require("../../common/makeHash");

class AccountService {
  static makeHash(string) {
    return makeHash(string);
  }

  static async storeValidAccount({ usernameHash, passwordHash }) {
    try {
      const account = await AccountDAO.findAccount({ usernameHash });
      const isAccountExists =
        typeof account.account === "undefined" ? false : true;
      if (!isAccountExists)
        return AccountDAO.storeAccount({
          usernameHash,
          passwordHash,
        });
      else {
        const error = new Error(
          "There is already an account with this username"
        );
        error.statusCode = 409;
        throw error;
      }
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AccountService;
