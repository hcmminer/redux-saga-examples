import { all } from "redux-saga/effects";
import { watchIncrement, watchDecrement } from "./counterSaga";
export default function* rootSaga() {
	yield all([
		// gọi nhiều saga
		watchIncrement(),
		watchDecrement(),
	]);
}
