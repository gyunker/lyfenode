import React from "react";
import "./updates.css";

class Updates extends React.Component {

  state = {
    workout: '',
    weight: '',
    drink: '',
    sleep: '',
    heart: ''
  };

  handleFormInput = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    const state = { ...this.state }

    this.setState({
      workout: '',
      weight: '',
      drink: '',
      sleepWell: '',
      sleep: '',
      heart: ''
    });

    event.preventDefault();

    fetch('/api/health/submit', {
      method: 'POST',
      headers: { Authorization: window.localStorage.getItem('jwtToken'), 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    }).then(res => res.json())
  };


  render() {
    return (
      <div id="updates">
        <form name="application">
          <fieldset>
            <h6> Updates Needed</h6>

            <div id="question">
              <label>How many hours did you workout last week?</label>
              <input type="number" onChange={this.handleFormInput} name="workout" value={this.state.workout} />
            </div>

            <div id="question">
              <label>What is your weight today?</label>
              <input type="number" onChange={this.handleFormInput} name="weight" value={this.state.weight} />
            </div>

            <div id="question">
              <label>How many drinks did you have last week?</label>
              <input type="number" onChange={this.handleFormInput} name="drink" value={this.state.drink} />
            </div>

            <div id="question">
              <label>How many hours did you sleep last night?</label>
              <input type="number" onChange={this.handleFormInput} name="sleep" value={this.state.sleep} />
            </div>

            <div id="question">
              <label>What is your heart rate today?</label>
              <input type="number" onChange={this.handleFormInput} name="heart" value={this.state.heart} />
            </div>
          </fieldset>

          <button className="submit" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  };
};

export default Updates;