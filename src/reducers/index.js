import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import job from "./job.reducer"

export default combineReducers({
  auth,
  message,
  job
});