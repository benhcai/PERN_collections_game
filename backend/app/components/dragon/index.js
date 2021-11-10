// traits.json acts as the source of truth for dragon traits
const TRAITS = require("../../../data/traits.json");

// // Using Contstructor Function
// // Allows usage of this keyword to allow a method to reference another property/method of the function
// function CreateDefaults() {
//   this.nickname = "unnamed";
//   this.birthdate = () => new Date();
//   this.randomTraits = function () {
//     const traits = [];
//     TRAITS.forEach((TRAIT) => {
//       const traitType = TRAIT.type;
//       const traitValues = TRAIT.values;
//       const traitValue = traitValues[Math.round(Math.random() * (traitValues.length - 1))];
//       traits.push({ traitType, traitValue });
//     });
//     return traits;
//   };
//   this.traits = this.randomTraits();
// }

// const DEFAULT_PROPERTIES = new CreateDefaults();

// Using Object Literal
const DEFAULT_PROPERTIES = {
  nickname: "unnamed",
  // This would cause all defaults to have the same Date()
  // birthdate: new Date(),
  // Use a getter instead. Note getters don't accept parameters.
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];
    TRAITS.forEach((TRAIT) => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;
      const traitValue =
        traitValues[
          Math.round(Math.random() * (traitValues.length - 1))
        ];
      traits.push({ traitType, traitValue });
    });
    return traits;
  },
  // Reassign randomTraits => traits using another getter.
  get traits() {
    return this.randomTraits;
  },

  generationId: undefined,
};

class Dragon {
  constructor({
    nickname = DEFAULT_PROPERTIES.nickname,
    birthdate = DEFAULT_PROPERTIES.birthdate,
    traits = DEFAULT_PROPERTIES.randomTraits,
    generationId = DEFAULT_PROPERTIES.generationId,
  } = {}) {
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
