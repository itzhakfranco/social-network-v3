import http from "../../services/httpService";
import {
	CREATE_PROFILE_SUCCESS,
	CREATE_PROFILE_REQUEST,
	FETCH_PROFILE_REQUEST,
	FETCH_PROFILE_SUCCESS,
} from "./profileType";

export const createProfile = (formData) => async (dispatch) => {
	dispatch({
		type: CREATE_PROFILE_REQUEST,
	});
	const { data } = await http.post("/profile", formData);

	dispatch({
		type: CREATE_PROFILE_SUCCESS,
		payload: data,
	});
};
export const fetchUserProfile = (profileId) => async (dispatch) => {
	dispatch({
		type: FETCH_PROFILE_REQUEST,
	});

	const { data } = await http.get(`/profile/view/${profileId}`);
	dispatch({
		type: FETCH_PROFILE_SUCCESS,
		payload: data,
	});
};
