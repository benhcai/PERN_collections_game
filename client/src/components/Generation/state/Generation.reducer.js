import GENERATION_TYPES from "./Generation.types";
import FETCH_STATES from "../../../helpers/FETCH_STATES";

const DEFAULT_STATE = {
  generationId: "",
  expirationTime: "",
  message: "",
  status: "",
};

const generation = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GENERATION_TYPES.GENERATION_FETCH:
      console.log("gen pay", action.payload);
      return { ...state, status: FETCH_STATES.FETCHING };
    case GENERATION_TYPES.GENERATION_FETCH_ERROR:
      return {
        ...state,
        message: action.payload,
        status: FETCH_STATES.ERROR,
      };
    case GENERATION_TYPES.GENERATION_FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        status: FETCH_STATES.SUCCESS,
      };
    default:
      return state;
  }
};

export default generation;
