const { v4: uuidv4 } = require("uuid");
const makeHash = require("../../common/makeHash");
const SEPARATOR = require("./session.CONSTANTS");

class SessionModel {
  constructor({ username }) {
    this.username = username;
    this.id = uuidv4();
  }

  static makeSession(props) {
    return new this(props);
  }

  // Creating Session string with Hash
  static makeAccountData({ username, id }) {
    return `${username}${SEPARATOR}${id}`;
  }

  static makeSessionString({ username, id }) {
    const accountData = SessionModel.makeAccountData({
      username,
      id,
    });
    const UUID = makeHash(accountData);
    return `${accountData}${SEPARATOR}${UUID}`;
  }

  makeSignature() {
    const { username, id } = this;
    return SessionModel.makeSessionString({ username, id });
  }

  // Verifying current Session string - Hash combination are correct
  static parseSessionString(sessionString) {
    const [username, id, sessionHash] =
      sessionString.split(SEPARATOR);
    return {
      username,
      id,
      sessionHash,
    };
  }

  static isSignatureValid(sessionString) {
    const { username, id, sessionHash } =
      SessionModel.parseSessionString(sessionString);
    const accountData = SessionModel.makeAccountData({
      username,
      id,
    });
    return sessionHash === makeHash(accountData);
  }
}

module.exports = SessionModel;
