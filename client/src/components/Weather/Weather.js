import React, { Component } from "react";
import { connect } from "react-redux";
import icons from './icons';
import "./weather.css";

const WeatherColumn = ({ timestamp, icon, temp, description }) => {
  const dayNameAbbr = new Date(timestamp * 1000).toString().split(' ').shift();
  return (
    <div className="col-sm-3">
      <img src={icons[icon]} alt={description} title={parseInt(temp) +"° on " + dayNameAbbr + " w/ " + description} id="weatherIcon"/>
    </div>
  );
}

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentWillUnmount() {
    this.unmount = true;
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.props.profile.zipcode},us&units=imperial&appid=1074c88f231350293c937f07686ff85a`)
      .then(res => res.json())
      .then(data => {
        const { city, list } = data

        const now = new Date()
        const todayStr = `${now.getFullYear()}-${(now.getMonth()+1)}-${now.getDate()}`;
        const dataToday = list.filter(item => item.dt_txt.startsWith(todayStr)).slice(0, 1);
        const dataAtNoonNonToday = list.filter(item => !item.dt_txt.startsWith(todayStr) && item.dt_txt.endsWith('12:00:00'));

        if (!this.unmount) {
          this.setState({
            isLoading: false,
            data: dataToday.concat(dataAtNoonNonToday).slice(0, 4),
            city
          });
        }
      })
      .catch(err => {
        if (!this.unmount) {
          this.setState({
            isLoading: false,
            data: [],
            city: { name: 'Error' },
            error: err
          });
        }
      });
  }

  render() {
    return this.state.isLoading ? this.renderLoading() : this.renderLoaded();
  }

  renderLoading() {
    return (
      <div id="weather">
        Loading...
      </div>
    );
  }

  renderLoaded() {
    if (this.state.error) {
      return <div id="weather">Error</div>;
    }

    const firstDay = new Date(this.state.data[0].dt * 1000).toString().split(' ').shift();
    const lastDay = new Date(this.state.data[3].dt * 1000).toString().split(' ').shift();

    return (
      <div id="weather">
        <h6>{this.state.city.name + " (" + firstDay + " - " + lastDay + ")"}</h6>
        <div className="row">

          {this.state.data.map(data => <WeatherColumn key={data.dt} timestamp={data.dt} temp={data.main.temp} icon={data.weather[0].icon} description={data.weather[0].description} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps
)(Weather);