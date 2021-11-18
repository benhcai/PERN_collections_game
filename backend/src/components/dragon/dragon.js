// traits.json acts as the source of truth for dragon traits
const DEFAULT_PROPERTIES = require("./DEFAULT_PROPERTIES");

// dragonId is
// dragonId is
// dragonId is
// dragonId is
// dragonId is
class Dragon {
  constructor({
    dragonId = DEFAULT_PROPERTIES.dragonId,
    nickname = DEFAULT_PROPERTIES.nickname,
    birthdate = DEFAULT_PROPERTIES.birthdate,
    traits = DEFAULT_PROPERTIES.randomTraits,
    generationId = DEFAULT_PROPERTIES.generationId,
  } = {}) {
    this.dragonId = dragonId;
    this.nickname = nickname;
    this.birthdate = birthdate;
    this.traits = traits;
    this.generationId = generationId;
  }
}

// class Dragon {
//   constructor({ nickname, birthdate } = {}) {
//     this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
//     this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
//   }
// }

module.exports = Dragon;
