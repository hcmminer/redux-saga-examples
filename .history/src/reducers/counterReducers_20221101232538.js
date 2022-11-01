import { INCREMENT, DECREMENT } from "../actions/actionTypes";

// khai bao cac method cho state, moi method la 1 function
export const counterReducers = (times = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return times + action.step;
		case DECREMENT:
			return times - action.step;
		default:
			return times;
	}
};


