import React, { Component } from "react";

class Wrapper extends Component {
  render() {
    return <div className="container-fluid p-0">{this.props.children}</div>;
  }
}

export default Wrapper;
