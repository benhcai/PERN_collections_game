const pool = require("../../../bin/databasePool");

class TraitsTable {
  // Get the traitId based on fields
  static getTraitId({ traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      // Double quotes should be used when referencing a column name
      // Using underscore notation means we don't need to use quotations
      pool.query(
        `
        SELECT  
                id 
        FROM    
                traits 
        WHERE   
                trait_type = $1 AND 
                trait_value = $2`,
        [traitType, traitValue],
        (err, response) => {
          if (err) return console.log("traitstable", err);
          resolve({ traitId: response.rows[0].id });
        }
      );
    });
  }
}

///////////////////////////////////////////////////////////////////////////////
// TraitsTable query test
TraitsTable.getTraitId({ traitType: "ability", traitValue: "earth" })
  .then((traitId) => {
    console.log(traitId);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = TraitsTable;
