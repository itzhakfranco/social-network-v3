import http from "../../services/httpService";
import * as actionTypes from "./postsType";

export const fetchPosts = () => async (dispatch) => {
	dispatch({
		type: actionTypes.FETCH_POSTS_REQUEST,
	});
	const { data } = await http.post("/posts");

	dispatch({
		type: actionTypes.FETCH_POSTS_SUCCESS,
		payload: data,
	});
};
