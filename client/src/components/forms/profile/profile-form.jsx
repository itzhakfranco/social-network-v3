import React, { Fragment } from "react";
import Form from "../../common/form";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { statusOptions } from "../../../config.json";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { createProfile } from "../../../store/profile/profileActions";
import PreLoader from "../../../utils/pre-loader";

class ProfileForm extends Form {
	state = {
		data: {
			company: "",
			website: "",
			location: "",
			status: "",
			skills: [],
			bio: "",
		},

		errors: {},
	};

	async componentDidMount() {
		const { match, profile } = this.props;
		if (match.params.id && match.params.id === profile._id) {
			this.setState({ data: this.mapToView(profile) });
		}
	}

	schema = {
		company: Joi.string().min(2).max(255).label("Company"),
		website: Joi.string().min(5).max(255).label("Website"),
		location: Joi.string().min(5).max(255).label("Location"),
		status: Joi.string().min(5).max(25).label("Status"),
		skills: Joi.string().min(1).max(255).label("Skills"),
		bio: Joi.string().label("Bio"),
		image: Joi.string().min(11).max(1024).uri().allow(""),
	};

	mapToView(profile) {
		return {
			company: profile.company,
			website: profile.website,
			location: profile.location,
			status: profile.status,
			skills: profile.skills && profile.skills.join(", "),
			bio: profile.bio,
			image: profile.image && profile.image,
		};
	}

	doSubmit = () => {
		const { createProfile, editProfile, history, match, auth } = this.props;

		const { data } = this.state;
		if (!match.params.id) {
			createProfile(data);
			toast("Awesome! your profile has been Created.");
			history.push(`/user/dashboard`);
			//history.push(`/user/profile/${auth.user.id}`);
		} else {
			editProfile(data, match.params.id);
			toast("Awesome! your profile has been Updated.");
			history.replace(`/user/profile/${auth.user.id}`);
		}
	};

	render() {
		//if user has profile, redirect to Dashboard
		const { profile, match } = this.props;
		if (profile && Object.keys(profile).length > 0 && !match.params.id) {
			return <Redirect to='/user/dashboard' />;
		}

		return (
			<Fragment>
				<div className='container'>
					<form
						onSubmit={this.handleSubmit}
						action=''
						method='POST'
						className='mt-4'
						autoComplete='off'
					>
						<div className='row'>
							<div className='col-lg-6 m-auto'>
								{this.renderInput(
									"company",
									"Company",
									"text",
									"Your own company or one you work for",
									true,
									"far fa-building"
								)}
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 m-auto'>
								{this.renderInput(
									"website",
									"Website",
									"text",
									"your own or a Company website",
									true
								)}
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 m-auto'>
								{this.renderInput(
									"image",
									"Profile Image",
									"text",
									"Profile Image",
									true
								)}
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 m-auto'>
								{this.renderSelect(statusOptions, "status", "Status")}
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 m-auto'>
								{this.renderInput(
									"skills",
									"Use comma separated values (e.g HTML,CSS,JavaScript,PHP)",
									"text",
									"skills",
									true,
									"fas fa-code"
								)}
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 m-auto'>
								{this.renderTextArea("bio", "Bio", "Placeholder")}
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 m-auto'>
								{this.renderInput(
									"location",
									"Location",
									"text",
									"City & state suggested (eg. Boston, MA)",
									true,
									"fas fa-map-marker-alt"
								)}
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 m-auto'>
								{this.renderButton(
									this.props.match.params.id
										? "Update Profile"
										: "Create Profile"
								)}
								{this.renderLinkButton(
									"Cancel",
									"/user/dashboard",
									"btn btn-dark ml-4"
								)}
							</div>
						</div>
					</form>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.profile.loading,
});

export default connect(mapStateToProps, {
	createProfile,
})(ProfileForm);
