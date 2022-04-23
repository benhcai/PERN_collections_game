// Pooling with postgres helps with reducing latency
const { Pool } = require("pg");
const databaseConfiguration = require("../../secrets/databaseConfiguration");

const pool = new Pool(databaseConfiguration);

module.exports = pool;
