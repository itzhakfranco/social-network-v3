import * as actionTypes from "./profileType";

const intialState = {
	posts: null,
	loading: false,
};

const postsReducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_POSTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FETCH_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default postsReducer;
