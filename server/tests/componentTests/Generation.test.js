const Generation = require("../../src/components/generation/Generation");

const generation = new Generation();

const gooby = generation.newDragonWithGenId({ nickname: "gooby" });
log(gooby);

setTimeout(() => {
  const ab = generation.newDragonWithGenId();
  log(ab);
}, 1000);
