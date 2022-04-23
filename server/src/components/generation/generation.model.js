const { REFRESH_RATE, SECONDS } = require("../../common/CONSTANTS");
const DragonModel = require("../dragon/dragon.model");

const refreshRate = REFRESH_RATE * SECONDS;

class GenerationModel {
  constructor() {
    this.expirationTime = this.calculateExpiration();
    this.generationId = null;
  }

  static createGeneration() {
    return new this();
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(
      Math.random() * (refreshRate / 2)
    );

    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newDragonWithGenId() {
    if (Date.now() > this.expiration) {
      throw new Error(
        `This generation expired on ${this.expirationTime}`
      );
    }

    return DragonModel.createDragon({
      generationId: this.generationId,
    });
  }
}

module.exports = GenerationModel;
