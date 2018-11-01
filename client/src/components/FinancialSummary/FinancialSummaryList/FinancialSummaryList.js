import React, { Component } from "react";
import "../financialsummary.css";

class FinancialSummaryList extends Component {
  componentDidMount() {
    console.log("List Mounted");
  }
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
<<<<<<< HEAD
=======
          Taxes
        </p>
        <p>
          <i className="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
>>>>>>> f9f7abe7339398ac2bd0043e89b78e4b1ff07e47
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
<<<<<<< HEAD
          <i className="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Recreation
=======
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
>>>>>>> f9f7abe7339398ac2bd0043e89b78e4b1ff07e47
        </p>
      </React.Fragment>
    );
  }
}

export default FinancialSummaryList;
