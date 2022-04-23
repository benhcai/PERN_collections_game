const { Router } = require("express");
const storeAccountController = require("../controllers/account.controller");
const router = new Router();

router.post("/signup", storeAccountController);

module.exports = router;
