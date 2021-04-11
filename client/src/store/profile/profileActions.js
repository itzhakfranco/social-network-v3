import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

import { CREATE_PROFILE_SUCCESS } from "./profileType";

export const createProfile = (formData) => async (dispatch) => {
	dispatch({
		type: CREATE_PROFILE_SUCCESS,
	});
	const res = await http.post(`${apiUrl}/profile`, formData);
	console.log(res);
	/* 	dispatch({
		type: REGISTER_SUCCESS,
		payload: data.token,
	}); */
};
