import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">LyfeNode</h1>
                <p className="lead">
                  {" "}
                  A home for your life
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2" id="signupButton">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light" id="loginButton">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

export default Landing;
