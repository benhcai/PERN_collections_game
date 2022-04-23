const AccountService = require("../../components/account/account.service");

const storeAccountController = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  const usernameHash = AccountService.createHash(username);
  const passwordHash = AccountService.createHash(password);

  try {
    await AccountService.storeValidAccount({
      usernameHash,
      passwordHash,
    });
    res.json({
      message: `successfully stored account ${usernameHash} ${passwordHash}`,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = storeAccountController;
