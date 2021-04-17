import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserProfile } from "../../../store/profile/profileActions";
import PreLoader from "../../../utils/pre-loader";
import ProfileExperience from "./profile-experience";
import ProfileHeader from "./profile-header";
import ProfilleActions from "./profile-actions";

const ProfilePage = ({ profile, experiences, loading, match }) => {
	return <>{<ProfilleActions profile={profile} />}</>;
};

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
	experiences: state.experiences.experiences,
});

export default connect(mapStateToProps, { fetchUserProfile })(ProfilePage);
