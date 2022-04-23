const pool = require("../../api/databasePool");

class TraitsDAO {
  static getTraitId({ traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `
        SELECT  
                trait_id 
        FROM    
                traits 
        WHERE   
                trait_type = $1 AND 
                trait_value = $2`,
        [traitType, traitValue],
        (err, response) => {
          if (err) return console.log("TraitsDAO", err);
          resolve({ traitId: response.rows[0].trait_id });
        }
      );
    });
  }
}

module.exports = TraitsDAO;
