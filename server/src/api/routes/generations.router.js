const { Router } = require("express");
const getCurrentGeneration = require("../controllers/generations.controller");

const router = new Router();

router.get("/current", getCurrentGeneration);

module.exports = router;
