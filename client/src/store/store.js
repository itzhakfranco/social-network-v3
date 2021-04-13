import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user/userReducer";
import profileReducer from "./profile/profileReducer";
import experienceReducer from "./experience/experienceReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
	user: userReducer,
	profile: profileReducer,
	experiences: experienceReducer,
});

const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (e) {
		return undefined;
	}
};

const saveState = (state) => {
	const serializedState = JSON.stringify(state);
	localStorage.setItem("state", serializedState);
};

const peristedState = loadState();

const store = createStore(
	rootReducer,
	peristedState,
	composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
