const GenerationModel = require("./generation.model");
const GenerationDAO = require("./generation.dao");

class GenerationsEngineService {
  constructor() {
    this.generation = null;
    this.buildGenTimer = null;
    this.delay = 0;
  }

  startEngine() {
    this.buildGeneration();
  }

  stopEngine() {
    clearTimeout(this.buildGenTimer);
  }

  // GenerationDAO.storeGeneration(generation)
  //   .then(({ generationId }) => {
  //     this.generation = generation;
  //     this.generation.generationId = generationId;

  // this.buildGenTimer = setTimeout(
  //   () => this.buildGeneration(),
  //   this.generation.expirationTime.getTime() - Date.now()
  // );
  //   })
  //   .catch((err) => console.log("generation engine err", err));

  async buildGeneration() {
    const generation = GenerationModel.createGeneration();

    try {
      const { generationId } = await GenerationDAO.storeGeneration(
        generation
      );
      this.generation = generation;
      this.generation.generationId = generationId;
      this.buildGenTimer = setTimeout(
        () => this.buildGeneration(),
        this.generation.expirationTime.getTime() - Date.now()
      );
    } catch {
      (err) => console.log("GenerationEngineService", err);
    }
  }
}

module.exports = GenerationsEngineService;
