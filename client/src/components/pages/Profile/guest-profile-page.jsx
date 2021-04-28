import React, { useEffect } from "react";

const GuestProfilePage = ({
	fetchProfileById,
	match
	
}) => {
	

	return  (
		<div> {match.params.id}</div>
	);
};



export default connect(null, {  })(GuestProfilePage);
