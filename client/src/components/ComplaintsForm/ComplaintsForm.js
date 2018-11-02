import React, { Component } from "react";
import "./ComplaintsForm.css";

class ComplaintsForm extends Component {
  render() {
    return (
      <div className="ComplaintsForm text-center">
        <textarea class="form-control" rows="1" id="comment" />
        <button type="button" class="btn">
          Submit
        </button>
      </div>
    );
  }
}

export default ComplaintsForm;
