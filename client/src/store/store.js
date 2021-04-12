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
	experience: experienceReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
