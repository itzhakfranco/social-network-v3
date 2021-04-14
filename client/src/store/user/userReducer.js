import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./userTypes";

import axios from "axios";

const intialState = {
	token: null,
	name: "",
	profile_id: null,
	loading: false,
};

const userReducer = (state = intialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case REGISTER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case REGISTER_SUCCESS:
			localStorage.setItem("token", payload.token);

			return {
				loading: false,
				token: payload.token,
				name: payload.name,
			};
		case LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", payload.token);
			axios.defaults.headers["x-auth-token"] = payload.token;

			return {
				token: payload.token,
				profile_id: payload.profile_id,
				name: payload.name,
				loading: false,
			};
		case LOGOUT:
		case REGISTER_FAIL:
			localStorage.removeItem("token");
			return {
				token: null,

				name: "",
				loading: false,
			};
		default:
			return state;
	}
};

export default userReducer;
