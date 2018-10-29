import React, { Component } from "react";
import "./healthsummary.css";
import { Link } from "react-router-dom";

class HealthSummary extends Component {
  render() {
    return (
      <div id="healthsummary">
        <h6>Health Summary</h6>

        <Link to="/health/weight">
          <p>
            <i className="fas fa-circle green" />
            <i className="fas fa-clipboard-list" />
            Weight (lbs)
          </p>
        </Link>

        <Link to="/health/workout">
          <p>
            <i className="fas fa-circle red" />
            <i className="fas fa-clipboard-list" />
            Work Outs
          </p>
        </Link>

        <Link to="/health/drink">
          <p>
            <i className="fas fa-circle green" />
            <i className="fas fa-clipboard-list" />
            Drinks
          </p>
        </Link>

        <Link to="/health/sleep">
          <p>
            <i className="fas fa-circle green" />
            <i className="fas fa-clipboard-list" />
            Sleep
          </p>
        </Link>
      </div>
    );
  }
}

export default HealthSummary;