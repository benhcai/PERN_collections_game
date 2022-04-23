// import reducers
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";

const options = {
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(thunk),
  devTools: true,
};

const store = configureStore(options);

export default store;
