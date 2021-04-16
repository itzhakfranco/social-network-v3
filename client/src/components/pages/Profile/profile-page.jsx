import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserProfile } from "../../../store/profile/profileActions";
import PreLoader from "../../../utils/pre-loader";
import ProfileExperience from "./profile-experience";
import ProfileHeader from "./profile-header";
import ProfilleActions from "./profile-actions";

const ProfilePage = ({
	fetchUserProfile,
	profile,
	experiences,
	loading,
	match,
}) => {
	useEffect(() => {
		fetchUserProfile(match.params.id);
	}, []);

	return loading ? <PreLoader /> : <>{<ProfilleActions profile={profile} />}</>;
};

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
	loading: state.profile.loading,
	experiences: state.experiences.experiences,
});

export default connect(mapStateToProps, { fetchUserProfile })(ProfilePage);
