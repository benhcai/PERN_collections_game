const { Router } = require("express");

const router = new Router();

router.get("/current", (request, response) => {
  console.log(
    "Generations Route - current generation: ",
    request.app.locals.engine.generation
  );
  response.json({
    generation: request.app.locals.engine.generation,
    data: "data",
  });
});

module.exports = router;
