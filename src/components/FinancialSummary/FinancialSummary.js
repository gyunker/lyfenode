import React, { Component } from "react";
import "./financialsummary.css";

class FinancialSummary extends Component {
  render() {
    return (
      <div id="financialsummary">
        <h6>Financial Summary</h6>
        <p>
          <i className="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Home & Bills
        </p>
        <p>
          <i className="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Taxes
        </p>
        <p>
          <i className="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Food
        </p>
        <p>
          <i className="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Travel & Ent.
        </p>
        <p>
          <i className="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Shopping
        </p>
        <p>
          <i className="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Health
        </p>
        <p>
          <i className="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Auto
        </p>
        <p>
          <i className="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Gifts
        </p>
        <p>
          <i className="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Dependents
        </p>
      </div>
    );
  }
}

export default FinancialSummary;
