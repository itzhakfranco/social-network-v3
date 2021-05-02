import React from "react";

const FilterButton = ({ posts, setPosts }) => {
	return (
		<div className='btn-group float-right'>
			<Link to='#' value='Newest' type='button' />

			<input value='Oldest' type='button' />
		</div>
	);
};

export default FilterButton;
