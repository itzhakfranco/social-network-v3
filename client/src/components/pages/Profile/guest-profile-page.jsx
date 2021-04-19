import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfileById } from "../../../store/profile/profileActions";
import PreLoader from "../../../utils/pre-loader";
import ProfileHeader from "./profile-header";
import ProfilleActions from "./profile-actions";
import ExperienceSection from "./experience-section";
import EducationSection from "./education-section";

class ProfilePage extends Component {
	componentDidMount() {
		this.props.fetchProfileById(this.props.match.params.id);
	}
	render() {
		const { profile, loading, user_id } = this.props;
		if (loading) return <PreLoader />;
		return (
			<div className='container'>
				<ProfilleActions profile={profile} user_id={user_id} />
				<ProfileHeader profile={profile} />
				<ExperienceSection experience={profile?.experience} />
				<EducationSection education={profile?.education} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile.guestProfile,
	loading: state.profile.loading,
	user_id: state.user.user_id,
});

export default connect(mapStateToProps, { fetchProfileById })(ProfilePage);
