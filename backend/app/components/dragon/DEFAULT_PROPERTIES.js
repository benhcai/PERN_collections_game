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

module.exports = DEFAULT_PROPERTIES;
