const pool = require("../../bin/databasePool");
pool.query(`SELECT * FROM generations`, (err, res) => {
  if (err) return console.log("error", err);
  console.log("response", res);
});
