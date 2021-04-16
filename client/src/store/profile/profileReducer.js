import {
	CREATE_PROFILE_REQUEST,
	CREATE_PROFILE_SUCCESS,
	FETCH_PROFILE_REQUEST,
	FETCH_PROFILE_SUCCESS,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_SUCCESS,
	DELETE_PROFILE_REQUEST,
	DELETE_PROFILE_SUCCESS,
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
				...state,
				profile: action.payload,
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
		case UPDATE_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload,
				loading: true,
			};

		case DELETE_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case DELETE_PROFILE_SUCCESS:
			return {
				...state,
				profile: null,
				loading: true,
			};

		default:
			return state;
	}
};

export default profileReducer;
