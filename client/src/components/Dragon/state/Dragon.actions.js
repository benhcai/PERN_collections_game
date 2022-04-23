import DRAGON_TYPES from "./Dragon.types";
import BACKEND from "../../../config";

const fetchNewDragon = () => (dispatch) => {
  dispatch({ type: DRAGON_TYPES.DRAGON_FETCH });

  fetch(`${BACKEND.ADDRESS}/dragons/new`)
    .then((res) => res.json())
    .then((json) => {
      if (json.type === "error") {
        dispatch({
          type: DRAGON_TYPES.DRAGON_FETCH_ERROR,
          message: json.message,
        });
      } else {
        dispatch({
          type: DRAGON_TYPES.DRAGON_FETCH_SUCCESS,
          dragon: json.dragon,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: DRAGON_TYPES.DRAGON_FETCH_ERROR,
        message: err.message,
      })
    );
};

export default fetchNewDragon;
