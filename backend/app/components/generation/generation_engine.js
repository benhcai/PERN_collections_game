const Generation = require("./index");
const GenerationsTable = require("../../api/generations/generations_table");

class GenerationsEngine {
  constructor() {
    this.generation = null;
    this.buildGenTimer = null;
  }

  start() {
    this.buildGeneration();
  }

  stop() {
    clearTimeout(this.buildGenTimer);
  }

  buildGeneration() {
    // Make sure the data assigned is good. Use a local constant first.
    const generation = new Generation();

    // This takes the newly created Generation instance
    // and puts passess it to the psql handler class.
    GenerationsTable.storeGeneration(generation)
      .then(({ generationId }) => {
        // If no error, generation will be a valid object.
        this.generation = generation;
        this.generation.generationId = generationId;
        console.log("id", this.generation.generationId);
        console.log("new generation", this.generation);
        console.log(
          "Lifespan: ",
          (() => {
            const date = new Date(
              this.generation.expiration.getTime() - Date.now()
            );
            return date.getSeconds();
          })()
        );
        // Recursively create new Generation()s with wait interval base on
        // their (short) expiration periods.
        // A push to the db occurs whenever the setTimeout function resolves.
        this.buildGenTimer = setTimeout(
          () => this.buildGeneration(),
          // Time until expiration defines desired delay
          this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch((err) => console.log("generation engine err", err));
  }
}

module.exports = GenerationsEngine;
