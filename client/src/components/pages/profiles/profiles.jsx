import React, { Fragment, Component } from "react";
import PageHeader from "../layout/page-header";
import { connect } from "react-redux";
import PreLoader from "../../utils/pre-loader";
import ProfileItem from "./profile-item";
import { getProfiles } from "../../actions/profile";
import SearchBar from "./search-bar";

class Profiles extends Component {
  state = {
    profiles: null,
    searchInput: "",
    searchResults: null,
  };

  async componentDidMount() {
    await this.props.getProfiles();
    const { profiles } = this.props;
    this.setState({ profiles });
  }

  clearSearchResults = () =>
    this.setState({ searchResults: null, searchInput: "" });

  setSearchInput = (e) => {
    if (e.target.value.length > 0) {
      this.setState({ searchInput: e.target.value });
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
    return this.props.loading || this.state.profiles === null ? (
      <PreLoader />
    ) : (
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

            {!this.props.loading &&
              this.props.profiles !== null &&
              this.props.profiles.length === 0 && <h4>No profiles found...</h4>}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profiles: state.profile.profiles,
  loading: state.profile.loading,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
