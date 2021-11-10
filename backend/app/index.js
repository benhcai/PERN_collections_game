const log = (input) => console.log(input);

//////////////////////////////////////////////////
// Dragons Test
// const Dragon = require("./dragon")
// const bbg = new Dragon({
//   nickname: "bbg",
//   birthdate: new Date(),
//   traits: [
//     { traitType: "color", traitValue: "black" },
//     { traitType: "pattern", traitValue: "solid" },
//     { traitType: "build", traitValue: "eggnormous" },
//     { traitType: "ability", traitValue: "earth" },
//   ],
// });

// setTimeout(() => {
//   const lemar = new Dragon();
//   log(lemar);
// }, 2000);

// log(bbg);

///////////////////////////////////////////////////////////
// Generation Test
// const Generation = require("./generation");

// const generation = new Generation();

// const gooby = generation.newDragon({ nickname: "gooby" });
// log(gooby);

// setTimeout(() => {
//   const ab = generation.newDragon();
//   log(ab);
// }, 1000);

///////////////////////////////////////////////////////////
// Generation Engine Express Test
const express = require("express");
const GenerationEngine = require("./components/generations/generations_engine");
const dragonRouter = require("./api/dragon/route_dragon");
const generationRouter = require("./api/generations/route_generation");

const app = express();
const engine = new GenerationEngine();

// setTimeout(() => engine.stop(), 20000);

// app.get("/dragon/new", (request, response) => {
//   response.json({ dragon: engine.generation.newDragon() });
// });

// Attach all routes from the dragon router
// onto this subroute /dragon

// Bind objects to the express application
app.locals.engine = engine;

app.use("/dragons", dragonRouter);
app.use("/generations", generationRouter);

// Express error handler. Also an express middleware.
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // generic error response/internal server error
  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

engine.start();

// This app/index.js file sets up the application,
// so we want to separate out the initiation of the app
// to server.js.

// We also want to move out the get requests
// to an api directiony using router.
// This provides a more modular design structure.
// Router is a complete middleware and routing system.
module.exports = app;
