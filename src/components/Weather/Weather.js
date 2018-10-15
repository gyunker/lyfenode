import React, { Component } from "react";
import "./weather.css";

const WeatherColumn = ({ timestamp, icon, description }) => {
  const dayNameAbbr = new Date(timestamp * 1000).toString().split(' ').shift();

  return (
    <div className="col-sm-3">
      <p>{dayNameAbbr}</p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} title={description} />
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

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=5392171&appid=1074c88f231350293c937f07686ff85a')
      .then(res => res.json())
      .then(data => {
        const { city, list } = data

        const now = new Date()
        const todayStr = `${now.getFullYear()}-${(now.getMonth()+1)}-${now.getDate()}`;
        const dataToday = list.filter(item => item.dt_txt.startsWith(todayStr)).slice(0, 1);
        const dataAtNoonNonToday = list.filter(item => !item.dt_txt.startsWith(todayStr) && item.dt_txt.endsWith('12:00:00'));

        this.setState({
          isLoading: false,
          data: dataToday.concat(dataAtNoonNonToday).slice(0, 4),
          city
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          data: [],
          city: { name: 'Error' },
          err
        });
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
    return (
      <div id="weather">
        <h6>{this.state.city.name}</h6>
        <div className="row">
          {this.state.data.map(data => <WeatherColumn key={data.dt} timestamp={data.dt} icon={data.weather[0].icon} description={data.weather[0].description} />)}
        </div>
      </div>
    );
  }
}

export default Weather;
