import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUserProfile } from "../../../store/profile/profileActions";

import PageHeader from "../../common/page-header";
import ExperienceTable from "./experience-table";
import LinkButton from "../../common/link-button";

import PreLoader from "../../../utils/pre-loader";

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchUserProfile();
	}
	render() {
		const { name, loading, experience, profile } = this.props;
		if (loading) return <PreLoader />;
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 m-auto'>
						<PageHeader
							title={`${name}'s Dashboard`}
							desc='Here You can view and create your credential'
						/>
					</div>
				</div>

				{!profile && (
					<LinkButton to='/user/create-profile'>Create Profile</LinkButton>
				)}
				{profile && experience?.length === 0 && (
					<LinkButton to={"/user/create-experience"}>Add Experience</LinkButton>
				)}
				{experience?.length > 0 && <ExperienceTable experience={experience} />}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	name: state.user.name,
	profile: state.profile.profile,
	experience: state.profile?.profile?.experience,
	loading: state.profile.loading,
});

export default connect(mapStateToProps, {
	fetchUserProfile,
})(Dashboard);
