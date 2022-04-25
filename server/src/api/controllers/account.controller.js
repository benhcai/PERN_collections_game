const makeHash = require("../../common/makeHash");
const AccountDAO = require("../../components/account/account.dao");
const AccountService = require("../../components/account/account.service");
const SessionModel = require("../../components/session/session.model");
const SessionService = require("../../components/session/session.service");

const accountSignupController = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    await AccountService.storeValidAccount({ username, password });

    // Only if storeValidAccount doesn't throw an error
    const { message } = await SessionService.setSessionCookie(
      res,
      username
    );

    res.json({
      message: `successfully stored account ${username} ${makeHash(
        password
      )} ${message}`,
    });
  } catch (err) {
    next(err);
  }
};

const accountLoginController = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const isValidAccount = await AccountService.validAccountDetails({
      username,
      password,
    });
    /* Check if sessionCookie already exists.
     */
    const message = isValidAccount
      ? await SessionService.setSessionCookie(res, username)
      : "";
    res.json({ message });
  } catch (err) {
    next(err);
  }
};

const accountLogoutController = async (req, res, next) => {
  try {
    if (!req.cookies.sessionString) {
      const error = new Error("You are not logged in");
      throw error;
    }
    console.log("log out started...");
    const { username } = SessionModel.parseSessionString(
      req.cookies.sessionString
    );

    await AccountDAO.updateSessionId({
      sessionId: null,
      usernameHash: makeHash(username),
    });
    res.clearCookie("sessionString");
    res.json({ message: "successfully logged out" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  accountSignupController,
  accountLoginController,
  accountLogoutController,
};
