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

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
//import ProfileActions from "./ProfileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div id="dashboard">
        <div className="row">
          <div className="col-sm-4 text-center p-3">
            Enter your complaints here
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
          {/* <div className="col-sm-3 border-l text-center p-3">
          <News2 />
          </div> */}
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
  }
}

// const mapStateToProps = state => ({
//   profile: state.profile,
//   auth: state.auth
// });

export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);
