import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUserExperiences } from "../../../store/experience/experienceActions";

import PageHeader from "../../common/page-header";
import ExperienceTable from "./experience-table";
import LinkButton from "../../common/link-button";

import PreLoader from "../../../utils/pre-loader";

const Dashboard = ({
	name,
	loading,
	experiences,
	fetchUserExperiences,
	profile,
}) => {
	useEffect(() => {
		profile && fetchUserExperiences();
	}, [profile, fetchUserExperiences]);
	return loading ? (
		<PreLoader />
	) : (
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
			{profile && experiences?.length === 0 && (
				<LinkButton to={"/user/create-experience"}>Add Experience</LinkButton>
			)}
			{experiences?.length > 0 && <ExperienceTable experiences={experiences} />}
		</div>
	);
};
const mapStateToProps = (state) => ({
	name: state.user.name,
	profile: state.profile.profile,
	experiences: state.experiences.experiences,
	loading: state.experiences.loading,
});

export default connect(mapStateToProps, { fetchUserExperiences })(Dashboard);
