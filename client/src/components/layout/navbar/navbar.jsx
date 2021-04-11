import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import GuestLinks from "./guest-links";
import MembersLinks from "./member-links";

const Navbar = ({ token, hasProfile, name }) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light shadow-sm'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					The Social Network 3.0
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<>
						{token && <MembersLinks hasProfile={hasProfile} name={name} />}
						{!token && <GuestLinks />}
					</>
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	token: state.user.token,
	hasProfile: state.user.hasProfile,
	name: state.user.name,
});

export default connect(mapStateToProps, {})(Navbar);
