import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

import {
	CREATE_EXPERIENCE_REQUEST,
	CREATE_EXPERIENCE_SUCCESS,
} from "./profileType";

export const addExperience = (formData) => async (dispatch) => {
	dispatch({
		type: CREATE_EXPERIENCE_REQUEST,
	});
	const res = await http.post(`${apiUrl}/profile/experience`, formData);
	console.log(res);
	/* 		dispatch({
		type: REGISTER_SUCCESS,
		payload: data.token,
	});  */
};
