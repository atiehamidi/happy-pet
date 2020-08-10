import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";

export default combineReducers({
  appState,
  user
});
