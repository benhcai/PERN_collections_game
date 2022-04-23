const pool = require("../../../api/databasePool");
const DragonModel = require("../dragon.model");
const DragonService = require("../dragon.service");

// const getDragonWithTraits = (dragon) => {
//   return (
//     Promise.all([
//       // This first function call returns the dragons properties
//       DragonModel.getDragon(dragon),
//       // The second function promise returns the traits
//       new Promise((resolve, reject) => {
//         pool.query(
//           `
//         SELECT trait_type, trait_value
//         FROM traits
//         INNER JOIN dragon_traits
//         ON traits.trait_id = dragon_traits.trait_id
//         WHERE dragon_traits.dragon_id = $1
//         `,
//           [dragon.dragonId],
//           (err, response) => {
//             if (err) return reject("err", err);
//             resolve(response.rows);
//           }
//         );
//       }),
//     ])
//       // When both the properties and resuls resolve,
//       // we destructure the array and name the rows:
//       .then(([dragonProperties, dragonTraits]) => {
//         // console.log("res", res);
//         // return { ...dragon, ...res[0], traits: res[1] };
//         return DragonService.createDragon({
//           dragonId: dragon.dragonId,
//           generationId: dragonProperties.generation_id,
//           ...dragonProperties,
//           traits: dragonTraits,
//         });
//       })
//       .catch((err) => console.error(err))
//   );
// };

const getDragonWithTraits = async (dragon) => {
  try {
    const [dragonProperties, dragonTraits] = await Promise.all([
      // This first function call returns the dragons properties
      DragonModel.getDragon(dragon),
      // The second function promise returns the traits
      new Promise((resolve, reject) => {
        pool.query(
          `
              SELECT trait_type, trait_value
              FROM traits
              INNER JOIN dragon_traits
              ON traits.trait_id = dragon_traits.trait_id
              WHERE dragon_traits.dragon_id = $1
              `,
          [dragon.dragonId],
          (err, response) => {
            if (err) return reject("err", err);
            resolve(response.rows);
          }
        );
      }),
    ]);

    return DragonService.createDragon({
      dragonId: dragon.dragonId,
      generationId: dragonProperties.generation_id,
      ...dragonProperties,
      traits: dragonTraits,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getDragonWithTraits;
