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
	FETCH_PROFILE_FAILED,
	CREATE_EXPERIENCE_REQUEST,
	CREATE_EXPERIENCE_SUCCESS,
	FETCH_USER_EXPERIENCES_REQUEST,
	FETCH_USER_EXPERIENCES_SUCCESS,
	FETCH_EXPERIENCE_BY_ID_REQUEST,
	FETCH_EXPERIENCE_BY_ID_SUCCESS,
	UPDATE_EXPERIENCE_REQUEST,
	UPDATE_EXPERIENCE_SUCCESS,
	DELETE_EXPERIENCE_REQUEST,
	DELETE_EXPERIENCE_SUCCESS,
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
	try {
		dispatch({
			type: FETCH_PROFILE_REQUEST,
		});

		const { data } = await http.get("/profile");
		dispatch({
			type: FETCH_PROFILE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_PROFILE_FAILED,
		});
	}
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

export const updateExperience = (experienceId, updatedExperience) => async (
	dispatch
) => {
	dispatch({
		type: UPDATE_EXPERIENCE_REQUEST,
	});

	const { data } = await http.put(
		`/profile/experience/edit/${experienceId}`,
		updatedExperience
	);

	dispatch({
		type: UPDATE_EXPERIENCE_SUCCESS,
		payload: data,
	});
};

export const addExperience = (formData) => async (dispatch) => {
	dispatch({
		type: CREATE_EXPERIENCE_REQUEST,
	});
	const { data } = await http.post("/profile/experience", formData);
	dispatch({
		type: CREATE_EXPERIENCE_SUCCESS,
		payload: data,
	});
};

export const fetchUserExperiences = () => async (dispatch) => {
	dispatch({
		type: FETCH_USER_EXPERIENCES_REQUEST,
	});
	const { data } = await http.get("/profile/experience");

	dispatch({
		type: FETCH_USER_EXPERIENCES_SUCCESS,
		payload: data,
	});
};

export const fetchExperienceById = (experienceId) => async (dispatch) => {
	dispatch({
		type: FETCH_EXPERIENCE_BY_ID_REQUEST,
	});

	const { data } = await http.get(`/profile/experience/${experienceId}`);

	dispatch({
		type: FETCH_EXPERIENCE_BY_ID_SUCCESS,
		payload: data,
	});

	return data;
};

export const deleteExperience = (experienceId) => async (dispatch) => {
	dispatch({
		type: DELETE_EXPERIENCE_REQUEST,
	});

	await http.delete(`/profile/experience/${experienceId}`);

	dispatch({
		type: DELETE_EXPERIENCE_SUCCESS,
		payload: experienceId,
	});
};
