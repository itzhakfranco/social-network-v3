import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const HomePage = ({ token }) => {
	if (token) {
		return <Redirect to='/profiles' />;
	}

	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>The Social Network 2.0</h1>
					<p className='lead'>
						Create a profile/portfolio, view other users profiles and share posts and get help from
						other developers
					</p>
					<div className='buttons'>
						<Link to='/user/signup' className='btn btn-primary mr-4'>
							Sign Up
						</Link>
						<Link to='/user/signin' className='btn btn-light'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	token: state.user.token,
});

export default connect(mapStateToProps)(HomePage);
