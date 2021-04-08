import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./todos/todoReducer";

const composeEnhancers = composeWithDevTools({});
const store = createStore(todoReducer, composeEnhancers());

export default store;
