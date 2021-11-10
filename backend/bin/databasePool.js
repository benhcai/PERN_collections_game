//////////////////////////////////////////////////////////
// npm i pg
// Pooling with postgres helps with reducing latency

const { Pool } = require("pg");
const databaseConfiguration = require("../secrets/databaseConfiguration");

// Move passwords to secrets file ignored by git
const pool = new Pool(databaseConfiguration);

module.exports = pool;

////////////////////////////////////////////////////////////
// Test query
// pool.query(`SELECT * FROM generations`, (err, res) => {
//   if (err) return console.log("error", err);
//   console.log("response", res);
// });
