const makeHash = require("../../common/makeHash");
const AccountDAO = require("../account/account.dao");
const SessionModel = require("./session.model");

class SessionService {
  static setSessionCookie(res, username) {
    return new Promise(async (resolve, reject) => {
      const session = SessionModel.createSession({ username });
      const sessionSignature = session.makeSignature();

      try {
        await AccountDAO.updateSessionId({
          sessionId: session.id,
          usernameHash: makeHash(username),
        });

        const twoHoursMs = 7200000;
        res.cookie("sessionString", sessionSignature, {
          expire: Date.now() + twoHoursMs,
          //
          // httpOnly: true,
          // Set to true after obtaining HTTPS certificate
          secure: false,
        });

        resolve({ message: `session created: ${sessionSignature}` });
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = SessionService;
