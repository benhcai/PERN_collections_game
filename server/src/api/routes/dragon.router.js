const { Router } = require("express");
const getDragon = require("../controllers/dragon.controller");

const router = new Router();

router.get("/new", getDragon);

module.exports = router;
