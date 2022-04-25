const { v4: uuidv4 } = require("uuid");
const makeHash = require("../../common/makeHash");
const SEPARATOR = require("./session.CONSTANTS");

class SessionModel {
  constructor({ username }) {
    this.username = username;
    this.id = uuidv4();
  }

  static createSession(props) {
    return new this(props);
  }

  static makeAccountData({ username, id }) {
    return `${username}${SEPARATOR}${id}`;
  }

  /**
   * @returns {string} username|uuid|hash(accountData);
   */
  static makeSessionString({ username, id }) {
    const accountData = SessionModel.makeAccountData({
      username,
      id,
    });
    const accountDataHash = makeHash(accountData);
    return `${accountData}${SEPARATOR}${accountDataHash}`;
  }

  makeSignature() {
    const { username, id } = this;
    return SessionModel.makeSessionString({ username, id });
  }

  // Verifying current Session string-Hash combination are correct
  static parseSessionString(sessionString) {
    const [username, id, sessionHash] =
      sessionString.split(SEPARATOR);
    return {
      username,
      id,
      sessionHash,
    };
  }

  /**
   *
   * @param {*} sessionString
   * @returns {}
   */
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
