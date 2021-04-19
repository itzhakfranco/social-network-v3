import React, { Fragment, Component } from "react";
import PageHeader from "../../common/page-header";
import { connect } from "react-redux";
import PreLoader from "../../../utils/pre-loader";
import ProfileItem from "./profile-item";
import { fetchAllProfiles } from "../../../store/profiles/profilesActions";
import SearchBar from "./search-bar";

class Profiles extends Component {
	state = {
		profiles: [],
		searchInput: null,
		searchResults: null,
	};

	async componentDidMount() {
		const { fetchAllProfiles } = this.props;
		const data = await fetchAllProfiles();
		this.setState({ profiles: data });
	}

	clearSearchResults = () =>
		this.setState({ searchResults: null, searchInput: "" });

	setSearchInput = (e) => {
		if (e.target.value.length > 0) {
			this.setState({ searchInput: e.target.value });
			this.setSearchResults();
		} else {
			this.clearSearchResults();
		}
	};

	setSearchResults = () => {
		this.setState({ loading: true });
		const { searchInput } = this.state;
		if (searchInput) {
			let searchResults = this.state.profiles.filter(
				(profile) =>
					profile.name.toLowerCase().includes(searchInput.toLowerCase()) ||
					profile.bio.toLowerCase().includes(searchInput.toLowerCase()) ||
					profile.company.includes(searchInput.toLowerCase()) ||
					profile.status.includes(searchInput.toLowerCase())
			);
			this.setState({ searchResults, loading: false });
		}
	};

	render() {
		return (
			<Fragment>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12 mb-4'>
							<PageHeader
								title='Profiles Page'
								desc='Here You can view all profiles'
							/>
						</div>
					</div>
					<SearchBar
						setSearchInput={this.setSearchInput}
						searchInput={this.state.searchInput}
						setSearchResults={this.setSearchResults}
						searchResults={this.state.searchResults}
						clearSearchResults={this.clearSearchResults}
					/>
					<div className='row'>
						{this.state.searchResults !== null
							? this.state.searchResults.map((profile) => (
									<ProfileItem key={profile._id} profile={profile} />
							  ))
							: this.state.profiles.map((profile) => (
									<ProfileItem key={profile._id} profile={profile} />
							  ))}

						{!this.props.profiles && <h4>No profiles found...</h4>}
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	profiles: state.profiles.profiles,
});

export default connect(mapStateToProps, { fetchAllProfiles })(Profiles);
