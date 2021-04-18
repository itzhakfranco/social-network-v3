import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllProfiles } from "../../../store/profiles/profilesActions";

class ProfilesPage extends Component {
	componentDidMount() {
		this.props.fetchAllProfiles();
	}

	render() {
		return <h3>hi</h3>;
	}
}

const mapStateToProps = (state) => ({
	profiles: state.profiles.profiles,
});

export default connect(mapStateToProps, { fetchAllProfiles })(ProfilesPage);
