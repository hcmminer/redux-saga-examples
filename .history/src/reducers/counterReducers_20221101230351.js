import { INCREMENT, DECREMENT } from "../actions/actionTypes";

// khai bao cac method cho state, moi 
const counterReducers = (times = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return times + action.step;
		case DECREMENT:
			return times - action.step;
		default:
			return times;
	}
};


export default counterReducers;
