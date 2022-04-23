const crypto = require("crypto");
const salt = require("../../secrets/salt");

// sha256 returns a 64 character hash,
// thus, it is confied as character(64) in sql
const hashAlgorithm = "sha256";
const encoding = "hex";

const makeHash = (string) => {
  return crypto
    .createHmac(hashAlgorithm, salt)
    .update(string)
    .digest(encoding);
};

module.exports = makeHash;
