import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
