import http from "../../services/httpService";
import {
	CREATE_PROFILE_SUCCESS,
	CREATE_PROFILE_REQUEST,
	FETCH_PROFILE_REQUEST,
	FETCH_PROFILE_SUCCESS,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_SUCCESS,
	DELETE_PROFILE_REQUEST,
	DELETE_PROFILE_SUCCESS,
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
export const fetchUserProfile = () => async (dispatch) => {
	dispatch({
		type: FETCH_PROFILE_REQUEST,
	});

	const { data } = await http.get("/profile/me");
	dispatch({
		type: FETCH_PROFILE_SUCCESS,
		payload: data,
	});
};

export const updateProfile = (profileData, profileId) => async (dispatch) => {
	dispatch({
		type: UPDATE_PROFILE_REQUEST,
	});

	const { data } = await http.put(`/profile/${profileId}`, profileData);
	dispatch({
		type: UPDATE_PROFILE_SUCCESS,
		payload: data,
	});
};

export const deleteProfile = (profileId) => async (dispatch) => {
	dispatch({
		type: DELETE_PROFILE_REQUEST,
	});

	await http.delete(`/profile/${profileId}`);
	dispatch({
		type: DELETE_PROFILE_SUCCESS,
	});
};
