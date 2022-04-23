const TraitsTable = require("../../src/components/traits/Traits.table");

TraitsTable.getTraitId({ traitType: "ability", traitValue: "earth" })
  .then((traitId) => {
    console.log(traitId);
  })
  .catch((err) => {
    console.log(err);
  });
