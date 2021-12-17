import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import semuaReducer from "./reducers";

const store = createStore(
  semuaReducer,
  composeWithDevTools()
);

export default store