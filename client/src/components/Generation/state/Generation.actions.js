import GENERATION_TYPES from "./Generation.types";
import BACKEND from "../../../config";

// Note this is two callbacks because we are not using mapDispatchToProps,
// but directly passing this into connect()
const fetchGeneration = () => (dispatch) => {
  dispatch({ type: GENERATION_TYPES.GENERATION_FETCH });
  console.log("--cost money--");
  fetch(`${BACKEND.ADDRESS}/generations/current`)
    .then((res) => res.json())
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: GENERATION_TYPES.GENERATION_FETCH_ERROR,
          payload: json.message,
        });
      } else {
        dispatch({
          type: GENERATION_TYPES.GENERATION_FETCH_SUCCESS,
          payload: json.generation,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GENERATION_TYPES.GENERATION_FETCH_ERROR,
        payload: err.message,
      });
    });
};

export default fetchGeneration;
