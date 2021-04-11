import {
	CREATE_EXPERIENCE_REQUEST,
	CREATE_EXPERIENCE_SUCCESS,
} from "./profileType";

const intialState = {
	experience: null,
	loading: false,
};

const authReducer = (state = intialState, action) => {
	switch (action.type) {
		case CREATE_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case CREATE_PROFILE_SUCCESS:
			return {
				loading: false,
				profile: action.payload,
			};

		default:
			return state;
	}
};

export default authReducer;
