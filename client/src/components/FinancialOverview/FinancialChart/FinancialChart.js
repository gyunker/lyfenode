import React, { Component } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import moment from "moment";
import numeral from "numeral";
import "../FinancialOverview.css";

class FinancialChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Home & Bills",
          "Food",
          "Travel & Ent.",
          "Shopping",
          "Recreation"
        ],
        datasets: [
          {
            label: `${moment().format("MMMM")} Total Spent`,
            data: props.chartData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)"
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-6">
          <Line
            data={this.state.chartData}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      // Include a dollar sign in the ticks
                      callback: function(value, index, values) {
                        return "$" + numeral(value).format("0,0");
                      }
                    }
                  }
                ]
              }
            }}
          />
        </div>
        <div className="col-sm-6">
          <Doughnut data={this.state.chartData} options={{}} />
        </div>
      </React.Fragment>
    );
  }
}

export default FinancialChart;
