const { Router } = require("express");
const DragonsTable = require("./dragons_table");

const router = new Router();

router.get("/new", (req, res, next) => {
  // Will end up with a circular dependency
  // res.json({ dragon: engine.generation.newDragon() });
  // Instead use app.local & req.app.locals
  // res.json({
  //   dragon: req.app.locals.engine.generation.newDragon(),
  // });

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
