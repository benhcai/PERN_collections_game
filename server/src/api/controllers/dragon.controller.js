// const { Router } = require("express");
const DragonDAO = require("../../components/dragon/dragon.dao");

// const router = new Router();

// router.get("/new", (request, response, next) => {
//   console.log("in control!!!", request, reesponse, next);
//   // // Will end up with a circular dependency if we try to import engine
//   // // as index is also importing route_dragon:
//   // const engine = require("../../index");
//   // response.json({ dragon: engine.generation.newDragon() });
//   // // Instead use app.local & require.app.locals
//   // response.json({
//   //   dragon: require.app.locals.engine.generation.newDragon(),
//   // });

//   // When client goes to localhost/dragons/new,
//   // a new dragon is created with the current generation class,
//   // it is then passed into a function that will interact with postgres (push to db).
//   // When that postgres function resolves, it returns the ID of the dragon pushed.
//   // The ID is added to the the input dragon object,
//   // then passed onwards.
//   const dragon =
//     request.app.locals.engine.generation.newDragonWithGenId();
//   DragonDAO.storeDragon(dragon)
//     .then((dragon) => {
//       response.json({ dragon });
//     })
//     .catch((err) => next(err));
// });

const getDragon = async (req, res) => {
  const dragonWithId =
    req.app.locals.engine.generation.newDragonWithGenId();
  try {
    const storedDragon = await DragonDAO.storeDragon(dragonWithId);
    res.json({ storedDragon });
  } catch (err) {
    console.log(err);
  }
  // DragonDAO.storeDragon(dragon);
  // .then((dragon) => {
  //   res.json({ dragon });
  // })
  // .catch((err) => next(err));
};

module.exports = getDragon;
