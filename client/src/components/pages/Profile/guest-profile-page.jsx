import React, { useEffect } from "react";
import { connect } from "react-redux";

const GuestProfilePage = ({
	fetchProfileById,
	match
	
}) => {
	

	return  (
		<div> {match.params.id}</div>
	);
};



export default connect(null, {  })(GuestProfilePage);
