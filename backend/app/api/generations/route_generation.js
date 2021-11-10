const { Router } = require("express");

const router = new Router();

router.get("/current", (req, res) => {
  console.log("current generation", req.app.locals.engine.generation);
  res.json({
    generation: req.app.locals.engine.generation,
    data: "data",
  });
});

module.exports = router;
