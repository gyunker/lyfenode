import React, { Component } from "react";
import "./navbar.css";
import Logo from "../../img/lyfenode-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light main-navBar">
        <a className="navbar-brand" href="/">
          <img src={Logo} className="main-logo" alt="LyfeNode Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/">
                Financials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fas fa-user-alt" />
                Yunker
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
