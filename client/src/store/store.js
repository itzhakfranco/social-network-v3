import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./auth/authReducer";

const composeEnhancers = composeWithDevTools({});

const store = createStore(
	authReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
