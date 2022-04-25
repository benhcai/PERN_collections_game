import AUTHFORM_TYPES from "./AuthForm.types";
import BACKEND from "../../../config";

export const fetchFromAccount =
  ({ endpoint, options, fetchType, errorType, successType }) =>
  (dispatch) => {
    dispatch({ type: fetchType });

    return fetch(`${BACKEND.ADDRESS}/accounts/${endpoint}`, options)
      .then((response) => response.json())
      .then((json) => {
        if (json.type === "error") {
          dispatch({ type: errorType, message: json.message });
        } else {
          console.log("succes fetch");
          dispatch({ type: successType, ...json });
        }
      })
      .catch((error) =>
        dispatch({ type: errorType, message: error.message })
      );
  };

export const signup = ({ username, password }) =>
  fetchFromAccount({
    endpoint: "signup",
    options: {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    },
    fetchType: AUTHFORM_TYPES.AUTHFORM_FETCHING,
    errorType: AUTHFORM_TYPES.AUTHFORM_FETCH_ERROR,
    successType: AUTHFORM_TYPES.AUTHFORM_FETCH_SUCCESS,
  });

export const login = ({ username, password }) =>
  fetchFromAccount({
    endpoint: "login",
    options: {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    },
    fetchType: AUTHFORM_TYPES.AUTHFORM_FETCHING,
    errorType: AUTHFORM_TYPES.AUTHFORM_FETCH_ERROR,
    successType: AUTHFORM_TYPES.AUTHFORM_FETCH_SUCCESS,
  });

export const logout = () =>
  fetchFromAccount({
    endpoint: "logout",
    options: { credentials: "include" },
    fetchType: AUTHFORM_TYPES.AUTHFORM_FETCHING,
    errorType: AUTHFORM_TYPES.AUTHFORM_FETCH_ERROR,
    successType: AUTHFORM_TYPES.AUTHFORM_LOGOUT_SUCCESS,
  });

export const fetchAuthenticated = () =>
  fetchFromAccount({
    endpoint: "authenticated",
    options: { credentials: "include" },
    fetchType: AUTHFORM_TYPES.AUTHFORM_FETCHING,
    errorType: AUTHFORM_TYPES.AUTHFORM_FETCH_ERROR,
    successType: AUTHFORM_TYPES.AUTHFORM_AUTHENTICATED_SUCCESS,
  });
