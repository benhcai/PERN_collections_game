///////////////////////////////////////////////////////////
// Generation Engine
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const GenerationEngineService = require("./components/generation/generationEngine.service");
const dragonsRouter = require("./api/routes/dragon.router");
const generationsRouter = require("./api/routes/generations.router");
const accountRouter = require("./api/routes/account.router");

const engine = new GenerationEngineService();

/////////////////////////////////////
// Generation Engine Express test
// setTimeout(() => engine.stopEngine(), 20000);
// app.get("/dragon/new", (request, response) => {
//   response.json({ dragon: engine.generation.newDragonWithGenId() });
// });

// Bind objects to the express application
app.locals.engine = engine;

// https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
// Same-origin policy specifes that the protocol (http),
// host (www., drive.), and port (3000)
// cors is an express middleware that configures cross-origin resource sharing
app.use(cors({ origin: "http://localhost:1234", credentials: true }));
// Parse the incomming http post request data
app.use(express.json());
app.use(cookieParser());

// Attach all routes from the dragon router
// onto this subroute /dragon
app.use("/accounts", accountRouter);
app.use("/dragons", dragonsRouter);
app.use("/generations", generationsRouter);

// Express error handler. Also an express middleware.
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // generic error response/internal server error
  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

engine.startEngine();

// This app/index.js file sets up the application,
// so we want to separate out the initiation of the app
// to server.js.

// We also want to move out the get requests
// to an api directiony using router.
// This provides a more modular design structure.
// Router is a complete middleware and routing system.
module.exports = app;
