import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

import { CREATE_PROFILE_SUCCESS, CREATE_PROFILE_REQUEST } from "./profileType";

export const createProfile = (formData) => async (dispatch) => {
	dispatch({
		type: CREATE_PROFILE_REQUEST,
	});
	const { data } = await http.post(`${apiUrl}/profile`, formData);

	dispatch({
		type: CREATE_PROFILE_SUCCESS,
		payload: data,
	});
};
