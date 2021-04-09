import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./authTypes";

const intialState = {
	token: null,
	loading: false,
};

const authReducer = (state = intialState, action) => {
	switch (action.type) {
		case REGISTER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case REGISTER_SUCCESS:
			console.log("hi");
			//localStorage.setItem("token", payload.token);
			return {
				token: action.payload,
			};

		default:
			return state;
	}
};

export default authReducer;
