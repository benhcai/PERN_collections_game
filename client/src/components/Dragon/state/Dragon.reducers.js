import DRAGON_TYPES from "./Dragon.types";
import FETCH_STATES from "../../../helpers/FETCH_STATES";

const DEFAULT_STATE = {
  generationId: "",
  dragonId: "",
  nickname: "",
  birthdate: "",
  traits: [],
  status: "",
};

const dragon = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case DRAGON_TYPES.DRAGON_FETCH:
      return { ...state, status: FETCH_STATES.FETCHING };
    case DRAGON_TYPES.DRAGON_FETCH_ERROR:
      return {
        ...state,
        status: FETCH_STATES.ERROR,
        message: action.payload,
      };
    case DRAGON_TYPES.DRAGON_FETCH_SUCCESS:
      return {
        ...state,
        status: FETCH_STATES.SUCCESS,
        ...action.dragon,
      };
    default:
      return state;
  }
};

export default dragon;
