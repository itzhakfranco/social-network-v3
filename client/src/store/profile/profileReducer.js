import {
	CREATE_PROFILE_REQUEST,
	CREATE_PROFILE_SUCCESS,
	FETCH_PROFILE_REQUEST,
	FETCH_PROFILE_SUCCESS,
} from "./profileType";

const intialState = {
	profile: null,
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
				loading: false,
			};
		case FETCH_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default profileReducer;
