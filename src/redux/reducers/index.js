import { combineReducers } from "redux";
import login from "./LoginReducer";
import register from "./RegisterReducer";

export default combineReducers({
  login,
  register,
});
