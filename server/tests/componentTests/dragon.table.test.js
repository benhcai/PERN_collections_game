///////////////////////////////////////////////////////////
// Query Test
const Generation = require("../../components/generation/Generation");
const DragonsTable = require("../../components/dragon/Dragons.table");

const generation = new Generation();

DragonsTable.storeDragon(generation.newDragonWithGenId()).then(
  (response) => console.log(response)
);

console.log("Test get dragon properties using ID");
DragonsTable.getDragon({ dragonId: 1 })
  .then((dragon) => console.log(dragon))
  .catch((err) => console.log("error ", err));
