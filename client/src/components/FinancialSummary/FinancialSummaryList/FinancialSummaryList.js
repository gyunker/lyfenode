import React, { Component } from "react";
import "../financialsummary.css";

class FinancialSummaryList extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="/financialoverview">
          <p>
            <i className="fas fa-circle red" />
            <i className="fas fa-clipboard-list" />
            Home & Bills
          </p>
        </a>
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
          <i className="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Recreation
        </p>
      </React.Fragment>
    );
  }
}

export default FinancialSummaryList;
