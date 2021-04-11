import { CREATE_PROFILE_REQUEST, CREATE_PROFILE_SUCCESS } from "./profileType";

const intialState = {
	profile: {},
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
