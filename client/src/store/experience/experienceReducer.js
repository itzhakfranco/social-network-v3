import {
	CREATE_EXPERIENCE_REQUEST,
	CREATE_EXPERIENCE_SUCCESS,
} from "./experienceType";

const intialState = {
	experience: null,
	loading: false,
};

const authReducer = (state = intialState, action) => {
	switch (action.type) {
		case CREATE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case CREATE_EXPERIENCE_SUCCESS:
			return {
				experience: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default authReducer;
