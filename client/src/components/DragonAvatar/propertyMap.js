import { dragonTraits } from "../../assets";

export const propertyMap = {
  color: {
    black: "#263238",
    green: "#a5d6a7",
    blue: "#0277bd",
    red: "#b53737",
  },
  build: {
    slender: dragonTraits.slender,
    stocky: dragonTraits.stocky,
    sporty: dragonTraits.sporty,
    skinny: dragonTraits.skinny,
  },
  pattern: {
    plain: dragonTraits.plain,
    striped: dragonTraits.striped,
    spotted: dragonTraits.spotted,
    patchy: dragonTraits.patchy,
  },
  size: {
    small: 100,
    medium: 140,
    large: 180,
    enormous: 220,
  },
  ability: {
    water: "water",
    earth: "earth",
    fire: "fire",
    air: "air",
  },
};
