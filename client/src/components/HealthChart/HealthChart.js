import React, { Component } from "react";
import "./health-chart.css";
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

class HealthChart extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    fetch('/api/health/chart/' + this.props.match.params.field, {
      method: 'GET',
      headers: { Authorization: window.localStorage.getItem('jwtToken') },
    })
    .then(res => res.json())
    .then(data => {
      const chartData = data.map(data => [data.date, data.sampleValue])

      this.setState({
        isLoading: false,
        chartData
      });
    })
    .catch(err => {
      console.error(err);
      this.setState({
        isLoading: false,
        err
      });
    });
  }

  render() {
    return this.state.isLoading ? this.renderLoading() : this.renderLoaded();
  }

  renderLoading() {
    return (
      <div id="health-chart">
        <h6>Loading...</h6>
      </div>
    );
  }

  getTitle() {
    const field = this.props.match.params.field

    const titles = {
      weight: 'Weight over time',
      workout: 'Workout hours over time',
      drink: 'Drinks drank over time',
      sleep: 'Sleep hours over time',
      heart: 'Heart rate over time'
    }

    return titles[field]
  }

  clearValues = () => {
    fetch('/api/health/clear', {
      method: 'POST',
      headers: { Authorization: window.localStorage.getItem('jwtToken'), 'Content-Type': 'application/json' },
      body: JSON.stringify({ field: this.props.match.params.field })
    }).then(() => this.fetch())
  }

  renderLoaded() {
    return (
      <div id="health-chart" className="container">
        <div className="row">
          <div className="col-sm-12 text-center mt-4">
            <h1>{this.getTitle()}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 mt-4">
            <LineChart data={this.state.chartData} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 mt-4">
            <div className="btn-danger btn-lg" onClick={this.clearValues}>Clear values</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HealthChart;
