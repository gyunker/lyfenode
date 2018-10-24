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
    fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@test.com', password: 'testtest' })
    })
    .then(res => res.json())
    .then(({ token }) =>
      fetch('http://localhost:5000/api/health/weight', {
        method: 'GET',
        headers: { Authorization: token }
      })
      .then(res => res.json())
      .then(data => {
        const chartData = data.map(data => [data.date, data.sampleValue])

        this.setState({
          isLoading: false,
          chartData
        });
      })
    )
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

  renderLoaded() {
    return (
      <div id="health-chart">
        <LineChart data={this.state.chartData} />
      </div>
    );
  }
}

export default HealthChart;
