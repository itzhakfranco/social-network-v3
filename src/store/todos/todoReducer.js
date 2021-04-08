import { ADD_TODO } from "./todoTypes";

const intialState = {
	todos: [],
};

const todoReducer = (state = intialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			let todos = [
				...state.todos,
				{ id: action.payload.id, title: action.payload.title },
			];

			return {
				...state,
				todos,
			};

		default:
			return state;
	}
};

export default todoReducer;
