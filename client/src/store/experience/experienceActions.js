import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

import {
	CREATE_EXPERIENCE_REQUEST,
	CREATE_EXPERIENCE_SUCCESS,
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

export const fetchUserExperiences = (formData) => async (dispatch) => {
	dispatch({
		type: CREATE_EXPERIENCE_REQUEST,
	});
	const { data } = await http.post(`${apiUrl}/profile/experience`, formData);
	console.log(data);
	dispatch({
		type: CREATE_EXPERIENCE_SUCCESS,
		payload: data,
	});
};
