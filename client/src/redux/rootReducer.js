import generation from "../components/Generation/state/Generation.reducer";
import dragon from "../components/Dragon/state/Dragon.reducers";
import authForm from "../components/AuthForm/state/AuthForm.reducers";

const rootReducer = {
  generation,
  dragon,
  account: authForm,
};

export default rootReducer;
