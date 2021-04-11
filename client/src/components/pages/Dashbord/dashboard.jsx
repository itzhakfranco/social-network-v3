import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../common/page-header";
import { ExperienceTable } from "./experience-table";
const Dashboard = ({ name }) => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 m-auto'>
						<PageHeader
							title={`${name}'s Dashboard`}
							desc='Here You can view and create your credential'
						/>
					</div>
				</div>
			</div>
			<ExperienceTable />
		</>
	);
};
const mapStateToProps = (state) => ({
	name: state.user.name,
});

export default connect(mapStateToProps, {})(Dashboard);
