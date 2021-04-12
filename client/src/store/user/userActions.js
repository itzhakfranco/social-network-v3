import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./userTypes";

export const signup = (formData) => async (dispatch) => {
	dispatch({
		type: REGISTER_REQUEST,
	});
	const { data } = await http.post(`${apiUrl}/users`, formData);
	dispatch({
		type: REGISTER_SUCCESS,
		payload: data,
	});
};

export const signin = (email, password) => async (dispatch) => {
	dispatch({
		type: LOGIN_REQUEST,
	});
	const { data } = await http.post(`${apiUrl}/auth`, { email, password });
	dispatch({
		type: LOGIN_SUCCESS,
		payload: data,
	});
};

export const logout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};
