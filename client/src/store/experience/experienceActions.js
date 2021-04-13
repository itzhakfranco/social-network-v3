import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

import {
	CREATE_EXPERIENCE_REQUEST,
	CREATE_EXPERIENCE_SUCCESS,
	FETCH_USER_EXPERIENCES_REQUEST,
	FETCH_USER_EXPERIENCES_SUCCESS,
	FETCH_EXPERIENCE_BY_ID_REQUEST,
	FETCH_EXPERIENCE_BY_ID_SUCCESS,
} from "./experienceType";

export const addExperience = (formData) => async (dispatch) => {
	dispatch({
		type: CREATE_EXPERIENCE_REQUEST,
	});
	const { data } = await http.post(`${apiUrl}/profile/experience`, formData);
	dispatch({
		type: CREATE_EXPERIENCE_SUCCESS,
		payload: data,
	});
};

export const fetchUserExperiences = () => async (dispatch) => {
	dispatch({
		type: FETCH_USER_EXPERIENCES_REQUEST,
	});
	const { data } = await http.get(`${apiUrl}/profile/experience`);

	dispatch({
		type: FETCH_USER_EXPERIENCES_SUCCESS,
		payload: data,
	});
};

export const fetchExperienceById = (experienceId) => async (dispatch) => {
	dispatch({
		type: FETCH_EXPERIENCE_BY_ID_REQUEST,
	});

	const { data } = await http.get(
		`${apiUrl}/profile/experience/${experienceId}`
	);

	dispatch({
		type: FETCH_EXPERIENCE_BY_ID_SUCCESS,
		payload: data,
	});
};