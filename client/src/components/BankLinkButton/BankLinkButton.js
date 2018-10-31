import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import PropTypes from "prop-types";
const PUBLIC_KEY = "3db111bbd39b28e327c069dd47665f";

class BankLinkButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <PlaidLink
          clientName="Plaid Client"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey={PUBLIC_KEY}
          className="btn"
          apiVersion="v2"
          onSuccess={this.props.BankLinkOnSuccess}
        >
          Link Bank Account
        </PlaidLink>
      </React.Fragment>
    );
  }
}
BankLinkButton.propTypes = {
  BankLinkOnSuccess: PropTypes.func.isRequired
};

export default BankLinkButton;
