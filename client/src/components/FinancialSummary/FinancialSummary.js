import React, { Component } from "react";
import "./financialsummary.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import FinancialSummaryList from "./FinancialSummaryList/FinancialSummaryList";
import BankLinkButton from "../BankLinkButton/BankLinkButton";

class FinancialSummary extends Component {
  state = {
    access: this.props.auth.user.access
  };

  componentWillUnmount() {
    this.unmount = true;
  }

  modifyAccessRights = access => {
    if (!this.unmount) {
      this.setState({
        access: access
      });
    }
  };

  BankLinkOnSuccess = (token, metadata) => {
    const jwt = localStorage.getItem('jwtToken');

    axios
      .get(`/api/financial/ex/${token}`, { headers: { Authorization: jwt } })
      .then(resp => {
        localStorage.setItem('jwtToken', resp.data.token);
        this.modifyAccessRights(resp.data.token);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="financialsummary">
        <h6>Financial Summary</h6>
        {
          this.state.access
          ? <FinancialSummaryList />
          : <BankLinkButton BankLinkOnSuccess={this.BankLinkOnSuccess} />
        }
      </div>
    );
  }
}

FinancialSummary.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(FinancialSummary);
