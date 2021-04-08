import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = () => {
	const guestLinks = (
		<Fragment>
			<ul className='navbar-nav mr-auto'>
				<li className='nav-item'>
					<NavLink className='nav-link btn text-dark' to='/profiles'>
						<i className='fas fa-users mx-2 '></i>Profiles
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink className='nav-link btn text-dark' to='/posts'>
						<i className='fas fa-clipboard mx-2 '></i>Posts
					</NavLink>
				</li>
			</ul>

			<ul className='navbar-nav ml-auto'>
				<li className='nav-item'>
					<NavLink
						className='btn btn-dark nav-link text-white mr-4'
						to='/user/signup'
					>
						<i className='fas fa-user-plus mx-1'></i>Signup
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						className='btn btn-dark nav-link text-white'
						to='/user/signin'
					>
						<i className='fas fa-sign-in-alt mx-1'></i>Signin
					</NavLink>
				</li>
			</ul>
		</Fragment>
	);
	const authLinks = (
		<Fragment>
			<ul className='navbar-nav mr-auto'>
				<li className='nav-item'>
					<NavLink className='nav-link btn text-dark' to='/profiles'>
						<i className='fas fa-users mx-2 '></i>Profiles
					</NavLink>
				</li>
				<li className='nav-item '>
					<NavLink className='nav-link btn text-dark' to='/posts'>
						<i className='fas fa-clipboard mx-2 '></i>Posts
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink className='nav-link btn text-dark' to='/user/dashboard'>
						<i className='fas fa-tachometer-alt ml-2'></i> Dashboard
					</NavLink>
				</li>
			</ul>
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item '>
					<NavLink
						className='btn btn-primary nav-link text-white mr-4'
						to='/user/add-post'
					>
						<i className='fas fa-plus-circle mx-1'></i>Add Post
					</NavLink>
				</li>

				<li className='nav-item'>
					<NavLink
						className='nav-link btn btn-secondary text-white mr-4'
						to={`/user/profile/`}
					>
						<i className='far fa-user mx-1'></i> User Name Profile
					</NavLink>
				</li>

				<li className='nav-item '>
					<NavLink
						className='nav-link btn btn-secondary text-white mr-4'
						to={`/user/create-profile`}
					>
						<i className='far fa-user mx-1'></i> Create Profile
					</NavLink>
				</li>

				<li className='nav-item'>
					<NavLink className='btn btn-dark nav-link text-white' to='#'>
						<i className='fas fa-sign-out-alt mx-1'></i>Signout
					</NavLink>
				</li>
			</ul>
		</Fragment>
	);

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
					<>{guestLinks}</>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
