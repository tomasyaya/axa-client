import { combineReducers } from "redux";
import brastlewarkReducer from "./brastlewarkReducer";

const rootReducer = combineReducers({
  brastlewark: brastlewarkReducer
});

export default rootReducer;
