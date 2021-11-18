const { REFRESH_RATE, SECONDS } = require("../../config");
const Dragon = require("../dragon/dragon");

// Sets units for expiration calculations
const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
    this.generationId = null;
  }

  calculateExpiration() {
    const expirationPeriod = Math.round(
      (Math.random() * refreshRate) / 2
    );
    // prettier-ignore
    const msUntilExpiration =
      Math.random() < 0.5 ? 
        refreshRate - expirationPeriod : 
        refreshRate + expirationPeriod;
    return new Date(Date.now() + msUntilExpiration);
  }

  newDragon() {
    if (Date.now() > this.expiration) {
      throw new Error(
        `This generation expired on ${this.expiration}`
      );
    }

    return new Dragon({ generationId: this.generationId });
  }
}

module.exports = Generation;
