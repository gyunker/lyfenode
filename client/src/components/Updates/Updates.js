import React from "react";
import "./updates.css";

class Updates extends React.Component {

    state = {
        workoutHours: '',
        weight: '',
        drinks: '',
        sleepWell: '',
        sleepHours: ''
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
            workoutHours: '',
            weight: '',
            drinks: '',
            sleepWell: '',
            sleepHours: ''
        });

        event.preventDefault();
        fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@test.com', password: 'testtest' })
        }).then(res => res.json()).then(({ token }) => {
            return fetch('/api/health/submit', {
                method: 'POST',
                headers: { Authorization: token, 'Content-Type': 'application/json' },
                body: JSON.stringify(state)
            }).then(res => res.json())
        }).then(console.log).catch(console.log)
    };


    render() {
        return (
            <div id="updates">
                <form name="application">
                    <fieldset>
                        <h6> Updates Needed </h6>
                        <div id="question">
                            <label>How many hours did you workout last week? </label>
                            <input type="number" onChange={this.handleFormInput} name="workoutHours" placeholder="3" value={this.state.workoutHours} />
                        </div>
                        <div id="question">
                            <label>What is your weight today? </label>
                            <input type="number"  onChange={this.handleFormInput} name="weight" placeholder="175" value={this.state.weight} />
                        </div>
                        <div id="question">
                            <label>How many drinks did you have last week? </label>
                            <input type="number"  onChange={this.handleFormInput} name="drinks" placeholder="8" value={this.state.drinks} />
                        </div>
                        <div id="question">
                            <label>Did you sleep well last night? </label>
                            <input type="text" onChange={this.handleFormInput} name="sleepWell" placeholder="Yes" value={this.state.sleepWell} />
                        </div>
                        <div id="question">
                            <label>How many hours did you sleep last night? </label>
                            <input type="number"  onChange={this.handleFormInput} name="sleepHours" placeholder="8" value={this.state.sleepHours} />
                        </div>
                    </fieldset>
                    <button className="submit" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    };
};


  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div id="updates">
        <form name="application">
          <fieldset>
            <h6> Updates Needed </h6>
            <div id="question">
              <label>How many hours did you workout last week? </label>
              <input
                className="finance-input"
                onChange={this.handleFormInput}
                name="first_name"
                placeholder="3"
                value={this.state.first_name}
              />
            </div>
            <div id="question">
              <label>What is your weight this week? </label>
              <input
                className="finance-input"
                onChange={this.handleFormInput}
                name="last_name"
                placeholder="175"
                value={this.state.last_name}
              />
            </div>
            <div id="question">
              <label>How many drinks did you have last week? </label>
              <input
                className="finance-input"
                onChange={this.handleFormInput}
                name="email_address"
                placeholder="8"
                value={this.state.email_address}
              />
            </div>
            <div id="question">
              <label>Did you sleep well last night? </label>
              <input
                className="finance-input"
                onChange={this.handleFormInput}
                name="first_name"
                placeholder="Yes"
                value={this.state.first_name}
              />
            </div>
            <div id="question">
              <label>How many hours did you sleep last night? </label>
              <input
                className="finance-input"
                onChange={this.handleFormInput}
                name="last_name"
                placeholder="8"
                value={this.state.last_name}
              />
            </div>
          </fieldset>
          <button className="submit" onClick={this.handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Updates;
