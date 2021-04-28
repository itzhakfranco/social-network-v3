import * as actionTypes from "./profileType";

const intialState = {
	guestProfile: null,
	memberProfile: null,
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
				memberProfile: action.payload,
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
				memberProfile: action.payload,
				loading: false,
			};
		case actionTypes.FETCH_PROFILE_BY_ID_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FETCH_PROFILE_BY_ID_SUCCESS:
			return {
				...state,
				guestProfile: action.payload,
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
				memberProfile: action.payload,
				loading: false,
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
				memberProfile: null,
				loading: false,
			};
		case actionTypes.CREATE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.CREATE_EXPERIENCE_SUCCESS:
			return {
				...state,
				memberProfile: action.payload,
				loading: false,
			};

		case actionTypes.FETCH_EXPERIENCE_BY_ID_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FETCH_EXPERIENCE_BY_ID_SUCCESS:
			return {
				...state,
				loading: false,
				guestProfile: action.payload,
			};

		case actionTypes.UPDATE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.UPDATE_EXPERIENCE_SUCCESS:
			return {
				...state,
				memberProfile: action.payload,
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
				memberProfile: action.payload,
				loading: false,
			};
		case actionTypes.CREATE_EDUCATION_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.CREATE_EDUCATION_SUCCESS:
			return {
				...state,
				memberProfile: action.payload,
				loading: false,
			};

		case actionTypes.FETCH_EDUCATION_BY_ID_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FETCH_EDUCATION_BY_ID_SUCCESS:
			return {
				...state,
				loading: false,
				guestProfile: action.payload,
			};

		case actionTypes.UPDATE_EDUCATION_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.UPDATE_EDUCATION_SUCCESS:
			return {
				...state,
				memberProfile: action.payload,
				loading: false,
			};

		case actionTypes.DELETE_EDUCATION_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.DELETE_EDUCATION_SUCCESS:
			return {
				...state,
				memberProfile: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default profileReducer;
