const { Router } = require("express");
const {
  accountSignupController,
  accountLoginController,
  accountLogoutController,
} = require("../controllers/account.controller");
const router = new Router();

router.post("/signup", accountSignupController);

router.post("/login", accountLoginController);

router.get("/logout", accountLogoutController);

module.exports = router;
