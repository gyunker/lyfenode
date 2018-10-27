import React, { Component } from "react";
import "./news.css";
import newsIcons from './newsIcons';
import News from "../News/News";


class NewsSummary extends Component {
  render() {
    return (
<ul id="tabs">
      <li><a href="#tab1">News</a></li>
      <li><a href="#tab2">User Profiles</a></li>
      <li><a href="#tab3">Contacts</a></li>
      <li><a href="#tab4">Applications</a></li>
      <li><a href="#tab5">Monthly Cost</a></li>
</ul>
<div className="container" id="tab1">
<News />
</div>
<div className="container" id="tab2">
    ...content goes here
</div>
<div className="container" id="tab3">
    ...content goes here
</div>
<div className="container" id="tab4">
    ...content goes here
</div>
<div className="container" id="tab5">
    ...content goes here
</div>
    );
  }
}

export default NewsSummary;