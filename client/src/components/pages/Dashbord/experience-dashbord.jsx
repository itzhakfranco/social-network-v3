import React, { Component } from "react";
import { connect } from "react-redux";

import ExperienceTable from "./experience-table";

import { fetchUserExperiences } from "../../../store/experience/experienceActions";
import PreLoader from "../../../utils/pre-loader";

class ExperienceTable extends Component {
	componentDidMount() {
		console.log("hiiii");
		this.props.fetchUserExperiences();
	}
	render() {
		if (this.props.loading) return <PreLoader />;

		return "hi";
	}
}

const mapStateToProps = (state) => ({
	loading: state.experiences.loading,
});
export default connect(mapStateToProps, { fetchUserExperiences })(
	ExperienceTable
);
