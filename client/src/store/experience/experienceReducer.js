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
		default:
			return state;
	}
};

export default experienceReducer;
