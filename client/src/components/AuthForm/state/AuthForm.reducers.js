import AUTHFORM_TYPES from "./AuthForm.types";
import FETCH_STATES from "../../../helpers/FETCH_STATES";

const DEFAULT_STATE = {
  loggedIn: false,
  status: "",
  message: "",
};

const authForm = (state = DEFAULT_STATE, action) => {
  console.log("at least here");
  switch (action.type) {
    case AUTHFORM_TYPES.AUTHFORM_FETCHING:
      return { ...state, status: FETCH_STATES.FETCHING };
    case AUTHFORM_TYPES.AUTHFORM_FETCH_ERROR:
      return {
        ...state,
        status: FETCH_STATES.ERROR,
        message: action.message,
      };
    case AUTHFORM_TYPES.AUTHFORM_FETCH_SUCCESS:
      console.log("cmon here");
      return {
        ...state,
        status: FETCH_STATES.SUCCESS,
        message: action.message,
        loggedIn: true,
      };
    case AUTHFORM_TYPES.AUTHFORM_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        status: FETCH_STATES.SUCCESS,
        message: action.message,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default authForm;
