import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../../store/user/userActions";

import GuestLinks from "./guest-links";
import MembersLinks from "./member-links";

const Navbar = ({ token, name, profile_id, logout }) => {
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
						{token && (
							<MembersLinks
								profile_id={profile_id}
								name={name}
								logout={logout}
							/>
						)}
						{!token && <GuestLinks />}
					</>
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	token: state.user.token,
	name: state.user.name,
	profile_id: state.user.profile_id,
});

export default connect(mapStateToProps, { logout })(Navbar);
