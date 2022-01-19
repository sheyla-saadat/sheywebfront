import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import service from "./service/reducer";
export default combineReducers({
  appState,
  user,
  service, // my added new reducer up there its imported as well .
});
