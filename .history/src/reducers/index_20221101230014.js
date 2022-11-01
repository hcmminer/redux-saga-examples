import { combineReducers } from "redux";
import counterReducers from "./counterReducers";

// day chinh la s
const myReducer = combineReducers({
	counterReducers,
});

export default myReducer;
