import React, { Component } from "react";
import "./healthsummary.css";

class HealthSummary extends Component {
  render() {
    return (
      <div id="healthsummary">
        <h6>Health Summary</h6>
        <p>
          <i class="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Weight (lbs)
        </p>
        <p>
          <i class="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Work Outs
        </p>
        <p>
          <i class="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Cardio
        </p>
        <p>
          <i class="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Alcohol
        </p>
        <p>
          <i class="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Heart Rate
        </p>
        <p>
          <i class="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          Sleep
        </p>
        <p>
          <i class="fas fa-circle green" />
          <i className="fas fa-clipboard-list" />
          5k Run
        </p>
        <p>
          <i class="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Max Bench
        </p>
        <p>
          <i class="fas fa-circle red" />
          <i className="fas fa-clipboard-list" />
          Pull-ups
        </p>
      </div>
    );
  }
}

export default HealthSummary;
