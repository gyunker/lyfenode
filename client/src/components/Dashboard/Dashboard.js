import React, { Component } from "react";
import "./dashboard.css";
import FinancialSummary from "../FinancialSummary/FinancialSummary";
import HealthSummary from "../HealthSummary/HealthSummary";
import Weather from "../Weather/Weather";
import QuickLinks from "../QuickLinks/QuickLinks";
import Stocks from "../Stocks/Stocks";
import News from "../News/News";
// import News2 from "../News2/News2";
import Updates from "../Updates/Updates";
import Sports from "../Sports/Sports";
import ComplaintsForm from "../ComplaintsForm/ComplaintsForm";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div id="dashboard">
            <div className="row">
              <div className="col-sm-4 text-center p-3">
                Enter Your Feedback Here
                <ComplaintsForm />
              </div>
              <div className="col-sm-4 border-l text-center p-3">
                <Weather />
              </div>
              <div className="col-sm-4 border-l text-center p-3">
                <QuickLinks />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 text-center p-3">
                <News />
              </div>
              <div className="col-sm-3 border-l text-center p-3">
                <Stocks />
              </div>
              <div className="col-sm-3 border-l text-center p-3">
                <Sports />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 text-center p-0">
                <FinancialSummary />
              </div>
              <div className="col-sm-3 border-l text-center">
                <HealthSummary />
              </div>
              <div className="col-sm-6 border-l text-center">
                <Updates />
              </div>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return <div id="dashboard">{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
