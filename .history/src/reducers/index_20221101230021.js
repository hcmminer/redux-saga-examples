import { combineReducers } from "redux";
import counterReducers from "./counterReducers";

// day chinh la state {}
const myReducer = combineReducers({
	counterReducers,
});

export default myReducer;
