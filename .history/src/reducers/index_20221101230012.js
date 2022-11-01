import { combineReducers } from "redux";
import counterReducers from "./counterReducers";

// day chinh la sate
const myReducer = combineReducers({
	counterReducers,
});

export default myReducer;
