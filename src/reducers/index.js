import { combineReducers } from "redux";
import ReducerTimes from "./ReducerTimezones";

const rootReducer = combineReducers({
  times: ReducerTimes
});

export default rootReducer;
