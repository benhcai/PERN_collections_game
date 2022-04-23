const getCurrentGeneration = (req, res) => {
  console.log(
    "Generations Route - get request: ",
    req.app.locals.engine.generation
  );
  res.json({
    generation: req.app.locals.engine.generation,
    data: "Data from Generation Route",
  });
};

module.exports = getCurrentGeneration;
