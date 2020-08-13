import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homePage from "./homePage/reducer";
export default combineReducers({
  appState,
  user,
  homePage,
});
