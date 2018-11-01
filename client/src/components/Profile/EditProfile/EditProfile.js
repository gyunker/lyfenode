import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../../common/TextFieldGroup";
import InputGroup from "../../common/InputGroup";
import {
  createProfile,
  getCurrentProfile,
  deleteAccount
} from "../../../actions/profileActions";

import Pandora from "../../../img/pandora-logo.png";
import ESPN from "../../../img/espn-logo.png";
import "./EditProfile.css";
import isEmpty from "../../../validation/is-empty";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      location: "",
      zipcode: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      pandora: "",
      espn: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesnt exist, make empty string
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.quicklinks = !isEmpty(profile.quicklinks)
        ? profile.quicklinks
        : {};
      profile.twitter = !isEmpty(profile.quicklinks.twitter)
        ? profile.quicklinks.twitter
        : "";
      profile.facebook = !isEmpty(profile.quicklinks.facebook)
        ? profile.quicklinks.facebook
        : "";
      profile.linkedin = !isEmpty(profile.quicklinks.linkedin)
        ? profile.quicklinks.linkedin
        : "";
      profile.youtube = !isEmpty(profile.quicklinks.youtube)
        ? profile.quicklinks.youtube
        : "";
      profile.instagram = !isEmpty(profile.quicklinks.instagram)
        ? profile.quicklinks.instagram
        : "";
      profile.pandora = !isEmpty(profile.quicklinks.pandora)
        ? profile.quicklinks.pandora
        : "";
      profile.espn = !isEmpty(profile.quicklinks.espn)
        ? profile.quicklinks.espn
        : "";

      // Set component fields state
      this.setState({
        handle: profile.handle,
        location: profile.location,
        zipcode: profile.zipcode,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram,
        pandora: profile.pandora,
        espn: profile.espn
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      zipcode: this.state.zipcode,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
      pandora: this.state.pandora,
      espn: this.state.espn
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Enter Yes or No"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Enter Yes or No"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Enter Yes or No"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="Enter Yes or No"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Enter Yes or No"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />

          <InputGroup
            placeholder="Enter Yes or No"
            name="instagram"
            icon={
              <img src={Pandora} className="link-image" alt="Pandora Logo" />
            }
            value={this.state.pandora}
            onChange={this.onChange}
            error={errors.pandora}
          />

          <InputGroup
            placeholder="Enter Yes or No"
            name="instagram"
            icon={<img src={ESPN} className="link-image" alt="ESPN Logo" />}
            value={this.state.espn}
            onChange={this.onChange}
            error={errors.espn}
          />
        </div>
      );
    }

    return (
      <div className="edit-profile">
        <div className="container" id="edit-profile">
          <div className="row">
            <div className="col-md-10 m-auto">
              <h1 className="display-4 text-center">Edit Profile</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="This is your user name"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City, state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder=" * Zip Code"
                  name="zipcode"
                  value={this.state.zipcode}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Zipcode"
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Quick Links
                  </button>
                  {/* <span className="text-muted">
                    (Links which you want to see on the Dashboard)
                  </span> */}
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
              <button
                onClick={this.onDeleteClick.bind(this)}
                className="btn btn-danger"
                id="delete-button"
              >
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile, deleteAccount }
)(withRouter(CreateProfile));
