import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../store/auth/authActions";
import PageHeader from "../common/page-header";

class Signup extends Form {
	state = {
		data: { name: "", email: "", password: "" },
		errors: {},
	};
	schema = {
		name: Joi.string().required().min(2).label("Name"),
		email: Joi.string().required().email().label("Email"),
		password: Joi.string().required().min(6).label("Password"),
	};

	doSubmit = async () => {
		const data = { ...this.state.data };
		const { signup } = this.props;
		try {
			await signup(data);
			toast(`Awesome ${data.name}! your account has been created.`);
		} catch (err) {
			if (err.response && err.response.status === 400) {
				this.setState({ errors: { email: "Email is taken" } });
			}
		}
	};

	render() {
		//	if (this.props.auth.token) return <Redirect to='/user/dashboard' />;
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 m-auto'>
						<PageHeader
							title='Signup Page'
							desc='Here You can Signup for a new Account'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-6 m-auto'>
						<form
							onSubmit={this.handleSubmit}
							action=''
							method='POST'
							className='mt-4'
							autoComplete='off'
						>
							{this.renderInput("name", "Your Name")}
							{this.renderInput("email", "Email", "email")}
							{this.renderInput("password", "Password", "password")}
							{this.renderButton("Signup Now")}
							<Link to='/' className='btn btn-dark ml-4'>
								Cancel
							</Link>
						</form>
						<p className='font-weight-light text-muted mt-4'>
							Already have an account? <Link to='/user/signin'>Sign In</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { signup })(Signup);
