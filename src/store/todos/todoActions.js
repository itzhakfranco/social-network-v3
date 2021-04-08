import { ADD_TODO } from "./todoTypes";

export const addTodo = (id, title) => {
	return {
		type: ADD_TODO,
		payload: {
			id,
			title,
		},
	};
};
