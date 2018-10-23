import React, { Component } from "react";
import axios from "axios";

class Wrapper extends Component {
  componentDidMount() {
    axios
      .get("/test")
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }
  render() {
    return <div className="container-fluid p-0">{this.props.children}</div>;
  }
}

export default Wrapper;
