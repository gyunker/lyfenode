import React from "react";
import "./preferences.css";

class Preferences extends React.Component {
    state = {
        first_name: null,
        last_name: null,
        email_address: null
    };
    
    handleFormInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = (event) => {
        event.preventDefault();
    };
        
    
    render() {
        return (
            <div>
                <form name="application">
                    <fieldset>
                        <legend> Personal Information </legend>
                        <div>
                            <label for="first_name">First name: </label>
                            <input onChange={this.handleFormInput} name="first_name" placeholder={this.state.first_name} value={this.state.first_name} />
                        </div>
                        <div>
                            <label for="last_name">Last name: </label>
                            <input onChange={this.handleFormInput} name="last_name" placeholder="Last Name" value={this.state.last_name} />
                        </div>
                        <div>
                            <label for="email_address">Email address: </label>
                            <input onChange={this.handleFormInput} name="email_address" placeholder="Email Address" value={this.state.email_address} />
                        </div>
                    </fieldset>
                    <button className="submit" onClick={this.handleFormSubmit}>Save</button>
                </form>
            </div>
        );
    };
};


export default Preferences;
