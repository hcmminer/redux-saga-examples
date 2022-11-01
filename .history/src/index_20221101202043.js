import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// redux
import myReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// redux-saga
import rootSaga from "./sagas/rootSaga";
import createSagaMiddleware from "@redux-saga"; // hàm này có nhiệm vụ tạo ra một middleware năm giữa action và reducer trong redux

const root = ReactDOM.createRoot(document.getElementById("root"));

// middlleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(myReducer, applyMiddleware(sagaMiddleware));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

sagaMiddleware.run(rootSaga); // Hàm này là chạy các saga

serviceWorker.unregister();
