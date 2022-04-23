const DEFAULT_PROPERTIES = require("./dragon.helpers/DEFAULT_PROPERTIES");

// class DragonModel {
//   constructor({
//     dragonId,
//     nickname,
//     birthdate,
//     traits,
//     generationId,
//   } = {}) {
//     this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
//     this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
//     this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
//     this.traits = traits || DEFAULT_PROPERTIES.traits;
//     this.generationId =
//       generationId || DEFAULT_PROPERTIES.generationId;
//   }

//   static createDragon(props) {
//     return new this(props);
//   }
// }

/**
 * Represents a dragon.
 * @constructor
 * @param { dragonId, nickName, generationId, birthdate, traits } props Dragon's properties
 */
class DragonModel {
  constructor(props) {
    Object.assign(this, DEFAULT_PROPERTIES, props);
  }

  static createDragon(props) {
    return new this(props);
  }
}

module.exports = DragonModel;
