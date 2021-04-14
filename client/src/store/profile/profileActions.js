import http from "../../services/httpService";

import { apiUrl } from "../../config.json";

import { CREATE_PROFILE_SUCCESS, CREATE_PROFILE_REQUEST } from "./profileType";

export const createProfile = (formData) => async (dispatch) => {
	//axios.defaults.baseURL = "ss";
	dispatch({
		type: CREATE_PROFILE_REQUEST,
	});
	const { data } = await http.post("/profile", formData);

	dispatch({
		type: CREATE_PROFILE_SUCCESS,
		payload: data,
	});
};
