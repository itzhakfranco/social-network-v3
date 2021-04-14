import {
	CREATE_EXPERIENCE_REQUEST,
	CREATE_EXPERIENCE_SUCCESS,
	FETCH_USER_EXPERIENCES_SUCCESS,
	FETCH_USER_EXPERIENCES_REQUEST,
	FETCH_EXPERIENCE_BY_ID_REQUEST,
	FETCH_EXPERIENCE_BY_ID_SUCCESS,
	UPDATE_EXPERIENCE_REQUEST,
	UPDATE_EXPERIENCE_SUCCESS,
	DELETE_EXPERIENCE_REQUEST,
	DELETE_EXPERIENCE_SUCCESS,
} from "./experienceType";

const intialState = {
	experiences: [],
	experience: {},
	loading: false,
};

const experienceReducer = (state = intialState, action) => {
	switch (action.type) {
		case CREATE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case CREATE_EXPERIENCE_SUCCESS:
			return {
				loading: true,
			};

		case FETCH_USER_EXPERIENCES_REQUEST: {
			return {
				loading: true,
			};
		}
		case FETCH_USER_EXPERIENCES_SUCCESS: {
			return {
				experiences: action.payload,
				loading: false,
			};
		}
		case FETCH_EXPERIENCE_BY_ID_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_EXPERIENCE_BY_ID_SUCCESS:
			return {
				...state,
				loading: false,
				experience: action.payload,
			};

		case UPDATE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case UPDATE_EXPERIENCE_SUCCESS:
			return {
				...state,
				experience: action.payload,
				loading: false,
			};
		case DELETE_EXPERIENCE_SUCCESS:
			return {
				...state,
				experiences: state.experiences.filter(
					(experience) => experience._id !== action.payload
				),
				loading: false,
			};
		case DELETE_EXPERIENCE_REQUEST:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

export default experienceReducer;
