import React, { Component } from "react";
import "./financialsummary.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { logoutUser } from "../../actions/authActions";
import FinancialSummaryList from "./FinancialSummaryList/FinancialSummaryList";
import BankLinkButton from "../BankLinkButton/BankLinkButton";

class FinancialSummary extends Component {
  state = {
    access: this.props.auth.user.access
  };

  modifyAccessRights = access => {
    this.setState({
      access: access
    });
  };

  BankLinkOnSuccess = (token, metadata) => {
    console.log("hit data");
    var jwt = localStorage.getItem("jwtToken");
    axios
      .get(`/api/financial/ex/${token}`, { headers: { Authorization: jwt } })
      .then(resp => {
        localStorage.setItem("jwtToken", resp.data.token);
        console.log(JSON.stringify(this.props));
        this.modifyAccessRights(resp.data.token);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(`User Access: ${this.props.auth.user.access}`);
    console.log(`User State Access: ${this.state.access}`);
    return (
      <div id="financialsummary">
        <h6>Financial Summary</h6>
        {this.state.access ? (
          <FinancialSummaryList />
        ) : (
          <BankLinkButton BankLinkOnSuccess={this.BankLinkOnSuccess} />
        )}
      </div>
    );
  }
}

// export default FinancialSummary;
FinancialSummary.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(FinancialSummary);
