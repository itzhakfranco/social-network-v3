import React, { useEffect } from "react";
import { connect } from "react-redux";
import PageHeader from "../../common/page-header";
import ExperienceTable from "./experience-table";
import { fetchUserExperiences } from "../../../store/experience/experienceActions";
import PreLoader from "../../../utils/pre-loader";

const Dashboard = ({ name, loading, experiences, fetchUserExperiences }) => {
	useEffect(() => {
		fetchUserExperiences();
	}, []);
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
			{experiences?.length > 0 && <ExperienceTable experiences={experiences} />}
		</div>
	);
};
const mapStateToProps = (state) => ({
	name: state.user.name,
	experiences: state.experiences.experiences,
	loading: state.experiences.loading,
});

export default connect(mapStateToProps, { fetchUserExperiences })(Dashboard);
