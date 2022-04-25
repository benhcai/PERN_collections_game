const AccountDAO = require("./account.dao");
const makeHash = require("../../common/makeHash");
const SessionService = require("../session/session.service");

class AccountService {
  static makeHash(string) {
    return makeHash(string);
  }

  static async storeValidAccount({ username, password }) {
    const usernameHash = makeHash(username);
    const passwordHash = makeHash(password);
    try {
      const isAccountExists = await AccountDAO.isAccountExist({
        usernameHash,
      });
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

  static validAccountDetails({ username, password }) {
    return new Promise(async (resolve, reject) => {
      try {
        const usernameHash = makeHash(username);
        const passwordHash = makeHash(password);
        const isAccountExist = await AccountDAO.isAccountExist({
          usernameHash,
        });
        const { account } = isAccountExist
          ? await AccountDAO.findAccount({
              usernameHash,
            })
          : {};
        if (
          isAccountExist &&
          passwordHash === account["password_hash"]
        ) {
          resolve(true);
        } else {
          const error = new Error(
            "The username or password is incorrect"
          );
          error.statusCode = 409;
          reject(error);
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  // static createValidSession(res, { username, password }) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const isValidAccount =
  //         await AccountService.validAccountDetails({
  //           username,
  //           password,
  //         });
  //       if (isValidAccount) {
  //         const message = await SessionService.setSessionCookie(
  //           res,
  //           username
  //         );
  //         resolve(message);
  //       } else {
  //         const error = new Error("Could not create valid session");
  //         error.statusCode = 409;
  //         reject();
  //       }
  //     } catch (err) {
  //       reject(err);
  //     }
  //   });
  // }
}

module.exports = AccountService;
