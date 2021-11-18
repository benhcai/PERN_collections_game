const { Router } = require("express");
const DragonsTable = require("./dragons_table");

const router = new Router();

router.get("/new", (req, res, next) => {
  // // Will end up with a circular dependency if we try to import engine
  // // as index is also importing route_dragon:
  // const engine = require("../../index");
  // res.json({ dragon: engine.generation.newDragon() });
  // // Instead use app.local & req.app.locals
  // res.json({
  //   dragon: req.app.locals.engine.generation.newDragon(),
  // });

  // When client goes to localhost/dragons/new,
  // a new dragon is created with the current generation class,
  // it is then passed into a function that
  // will interact with postgres (push to db).
  const dragon = req.app.locals.engine.generation.newDragon();
  DragonsTable.storeDragon(dragon)
    .then(({ dragonId }) => {
      console.log("dragonId", dragonId);
      dragon.dragonId = dragonId;
      res.json({ dragon });
    })
    .catch((err) => next(err));
});

module.exports = router;
