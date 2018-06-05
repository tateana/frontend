import { combineReducers } from "redux";
import MessageReducer from "./message";

const rootReducer = combineReducers({
  message: MessageReducer,
});

export default rootReducer;