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
	hasProfile,
}) => {
	useEffect(() => {
		hasProfile && fetchUserExperiences();
	}, [hasProfile]);
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
			{!hasProfile && (
				<LinkButton to='create-profile'>Create Profile</LinkButton>
			)}
			{hasProfile && experiences?.length == 0 && (
				<LinkButton to={"/user/create-experience"}>Add Experience</LinkButton>
			)}
			{experiences?.length > 0 && <ExperienceTable experiences={experiences} />}
		</div>
	);
};
const mapStateToProps = (state) => ({
	name: state.user.name,
	hasProfile: state.user.hasProfile,
	experiences: state.experiences.experiences,
	loading: state.experiences.loading,
});

export default connect(mapStateToProps, { fetchUserExperiences })(Dashboard);
