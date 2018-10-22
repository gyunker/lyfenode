import React, { Component } from "react";
import "./quicklinks.css";
import Gmail from "../../img/gmail-logo.png";
import Insta from "../../img/instagram-logo.png";
import Pandora from "../../img/pandora-logo.png";
import ESPN from "../../img/espn-logo.png";

class QuickLinks extends Component {
  render() {
    return (
      <div id="quicklinks">
        <h6>Quick Links</h6>
      <div className="row" id="quicklinks">
      <div className="col-sm-3 text-center p-3">
      <a href="https://www.gmail.com">
          <img src={Gmail} className="quicklink-image" alt="Gmail Logo" />
        </a>
      </div>
      <div className="col-sm-3 text-center p-3">
      <a href="https://www.instagram.com">
          <img src={Insta} className="quicklink-image" alt="Insta Logo" />
        </a>
      </div>
      <div className="col-sm-3 text-center p-3">
      <a href="https://www.pandora.com">
          <img src={Pandora} className="quicklink-image" alt="Pandora Logo" />
        </a>
      </div>
      <div className="col-sm-3 text-center p-3">
      <a href="https://www.espn.com">
          <img src={ESPN} className="quicklink-image" alt="ESPN Logo" />
        </a>
      </div>
    </div>
    </div>
    );
  }
}

export default QuickLinks;
