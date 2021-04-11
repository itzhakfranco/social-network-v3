import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./userTypes";

const intialState = {
	token: null,
	hasProfile: false,
	name: "",
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

			return {
				token: payload.token,
				hasProfile: payload.hasProfile,
				name: payload.name,
				loading: false,
			};
		default:
			return state;
	}
};

export default userReducer;
