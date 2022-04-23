class AccountModel {
  constructor(props) {
    Object.assign(this, props);
  }

  static createAccount(props) {
    return new this(props);
  }

  // https://stackoverflow.com/questions/5305854/best-place-for-validation-in-model-view-controller-model
  static isValidAccount(account) {
    const { username, password } = account;
    if (!username || !password) return false;
    const isString =
      typeof username === "string" && typeof password === "string";
    const isContent = username.length > 0 && password.length > 0;
    if (isString && isContent) return true;
    return false;
  }
}

module.exports = AccountModel;
