const Dragon = require("../../src/components/dragon/Dragon");
const bbg = new Dragon({
  nickname: "bbg",
  birthdate: new Date(),
  traits: [
    { trait_type: "color", trait_value: "black" },
    { trait_type: "pattern", trait_value: "solid" },
    { trait_type: "build", trait_value: "eggnormous" },
    { trait_type: "ability", trait_value: "earth" },
  ],
});

setTimeout(() => {
  const lemar = new Dragon();
  log(lemar);
}, 2000);

log(bbg);
