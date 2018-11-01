import React, { Component } from "react";
import axios from "axios";
import FinancialRow from "./FinancialRow/FinancialRow";
import moment from "moment";
import FinancialChart from "./FinancialChart/FinancialChart";
import Finance from "../../utils/Finance";

class FinancialOverview extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      transactions: [],
      Shops: [],
      Food: [],
      Recreation: [],
      Payment: [],
      Travel: [],
      TransactionTotals: {}
    };
  }
  componentDidMount() {
    var jwt = localStorage.getItem("jwtToken");
    axios
      .get("/api/financial/transactions", { headers: { Authorization: jwt } })
      .then(resp => {
        this.setState({
          transactions: resp.data,
          Shops: resp.data.filter(x => x.category === "Shops"),
          Food: resp.data.filter(x => x.category === "Food and Drink"),
          Recreation: resp.data.filter(x => x.category === "Recreation"),
          Payment: resp.data.filter(x => x.category === "Payment"),
          Travel: resp.data.filter(x => x.category === "Travel"),
          isLoading: false,
          TransactionTotals: Finance.GetTransactionTotalsObject(resp.data)
        });
        console.log(this.state.TransactionTotals);
      })
      .catch(err => console.log(err));
  }

  render() {
    return this.state.isLoading ? this.renderLoading() : this.renderLoaded();
  }

  renderLoading() {
    return <div id="financialOverview">Loading...</div>;
  }

  renderLoaded() {
    return (
      <div id="financialOverview" className="container">
        <div className="row">
          <div className="col-sm-12 text-center mt-4">
            <h1>Financial Overview</h1>
          </div>
        </div>
        <div className="row financialChart">
          <FinancialChart chartData={this.state.TransactionTotals} />
        </div>
        <div id="financialOverview">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Categories</th>
                <th scope="col">{moment().format("MMMM")} 2018</th>
                <th scope="col">vs LM</th>
                <th scope="col">vs 3mo Avg</th>
                <th scope="col">YTD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Home & Bills</th>
                <FinancialRow category={this.state.Payment} />
              </tr>
              <tr>
                <th scope="row">Food</th>
                <FinancialRow category={this.state.Food} />
              </tr>
              <tr>
                <th scope="row">Travel & Ent</th>
                <FinancialRow category={this.state.Travel} />
              </tr>
              <tr>
                <th scope="row">Shopping</th>
                <FinancialRow category={this.state.Shops} />
              </tr>
              <tr>
                <th scope="row">Recreation</th>
                <FinancialRow category={this.state.Recreation} />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FinancialOverview;
