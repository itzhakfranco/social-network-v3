import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserProfile } from "../../../store/profile/profileActions";
import PreLoader from "../../../utils/pre-loader";
import ProfileExperience from "./profile-experience";
import ProfileHeader from "./profile-header";

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

	return loading ? (
		<PreLoader />
	) : (
		<>
			{
				<div className='container'>
					{profile !== null && <ProfileHeader profile={profile} />}

					{experiences.length > 0 && (
						<div className='row'>
							<div className='col-lg-12'>
								<h4 className='font-weight-bold text-dark my-4'>Experiences</h4>
							</div>
							{experiences.map((experience) => (
								<div key={experience._id} className='col-lg-12'>
									<ProfileExperience
										key={experience._id}
										experience={experience}
									/>
								</div>
							))}
						</div>
					)}
					{/* {profile !== null && profile.education.length > 0 && (
					<div className='row'>
						<div className='col-lg-12'>
							<h4 className='font-weight-bold text-dark my-4'>Educations</h4>
						</div>
						{profile.education.map((education) => (
							<div key={education._id} className='col-lg-12'>
								<ProfileEducation key={education._id} education={education} />
							</div>
						))} */}
				</div>
			}
		</>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
	loading: state.profile.loading,
	experiences: state.experiences.experiences,
});

export default connect(mapStateToProps, { fetchUserProfile })(ProfilePage);
