const { Router } = require("express");
const DragonsTable = require("../../database/dragonsTable");

const router = new Router();

router.get("/new", (require, response, next) => {
  // // Will end up with a circular dependency if we try to import engine
  // // as index is also importing route_dragon:
  // const engine = require("../../index");
  // response.json({ dragon: engine.generation.newDragon() });
  // // Instead use app.local & require.app.locals
  // response.json({
  //   dragon: require.app.locals.engine.generation.newDragon(),
  // });

  // When client goes to localhost/dragons/new,
  // a new dragon is created with the current generation class,
  // it is then passed into a function that will interact with postgres (push to db).
  // When that postgres function resolves, it returns the ID of the dragon pushed.
  // The ID is added to the the input dragon object,
  // then passed onwards.
  const dragon = require.app.locals.engine.generation.newDragon();
  DragonsTable.storeDragon(dragon)
    .then((dragon) => {
      response.json({ dragon });
    })
    .catch((err) => next(err));
});

module.exports = router;
