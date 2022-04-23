const getDragonWithTraits = require("../../src/components/dragon/dragon.helpers/getDragonWithTraits");

getDragonWithTraits({ dragonId: 1 })
  .then((dragon) => console.log("dragon", dragon))
  .catch((err) => console.log("err", err));
