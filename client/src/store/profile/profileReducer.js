import * as actionTypes from "./profileType";

const intialState = {
	profile: null,
	loading: false,
};

const profileReducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.CREATE_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload,
				loading: false,
			};
		case actionTypes.FETCH_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FETCH_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload,
				loading: false,
			};
		case actionTypes.UPDATE_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload.profile,
				loading: true,
			};
		case actionTypes.FETCH_PROFILE_FAILED:
			return {
				...state,
				profile: null,
				loading: false,
			};
		case actionTypes.DELETE_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.DELETE_PROFILE_SUCCESS:
			return {
				...state,
				profile: null,
				loading: true,
			};
		case actionTypes.CREATE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.CREATE_EXPERIENCE_SUCCESS:
			return {
				loading: false,
			};

		case actionTypes.FETCH_USER_EXPERIENCES_REQUEST: {
			return {
				loading: true,
			};
		}
		case actionTypes.FETCH_USER_EXPERIENCES_SUCCESS: {
			return {
				experiences: action.payload,
				loading: false,
			};
		}
		case actionTypes.FETCH_EXPERIENCE_BY_ID_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FETCH_EXPERIENCE_BY_ID_SUCCESS:
			return {
				...state,
				loading: false,
				experience: action.payload,
			};

		case actionTypes.UPDATE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.UPDATE_EXPERIENCE_SUCCESS:
			return {
				...state,
				experience: action.payload,
				loading: false,
			};

		case actionTypes.DELETE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.DELETE_EXPERIENCE_SUCCESS:
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
