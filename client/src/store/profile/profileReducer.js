import { CREATE_PROFILE_REQUEST, CREATE_PROFILE_SUCCESS } from "./profileType";

const intialState = {
	profile: {},
	profile_id: null,
	has_profile: true,
	loading: false,
};

const profileReducer = (state = intialState, action) => {
	switch (action.type) {
		case CREATE_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case CREATE_PROFILE_SUCCESS:
			return {
				profile: action.payload.profile,
				has_profile: action.payload.has_profile,
				profile_id: action.payload.profile_id,
				loading: false,
			};

		default:
			return state;
	}
};

export default profileReducer;
