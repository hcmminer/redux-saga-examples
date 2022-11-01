import { combineReducers } from "redux";
import counterReducers from "./counterReducers";

// day chinh la state = {counterReducers,...}
const myReducer = combineReducers({
	counterReducers,
});

export default myReducer;
