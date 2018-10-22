import React, { Component } from "react";
import "./stocks.css";

const StockRow = ({ symbol, latestPrice, change, changePercent }) => {
  return (
    <div className="row stock-row">
      <div className="col-sm-3"><a href={"https://iextrading.com/apps/stocks/"+symbol} target="_blank" rel="noopener noreferrer">{symbol}</a></div>
      <div className="col-sm-3">{latestPrice.toFixed(2)}</div>
      <div className={"col-sm-3" + ((change < 0) ? ' negative' : ' positive')}>{change.toFixed(2)}</div>
      <div className={"col-sm-3" + ((changePercent < 0) ? ' negative' : ' positive')}>{(changePercent * 100).toFixed(2)}</div>
    </div>
  );
}

class Stocks extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=tsla,nflx,spy,adbe,fb,crm,goog,aapl,msft,amd&types=quote')
      .then(res => res.json())
      .then(data => {
        const stocks = Object.values(data).map(stock => stock.quote)

        this.setState({
          isLoading: false,
          stocks
        });
      })
      .catch(err => {
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
      <div id="stocks">
        Loading...
      </div>
    );
  }

  renderLoaded() {
    return (
      <div id="stocks">
        <h6>Stocks</h6>
        <div className="box">
          <div className="row stock-row">
            <div className="col-sm-3">Symbol</div>
            <div className="col-sm-3">Price</div>
            <div className="col-sm-3">Change</div>
            <div className="col-sm-3">% Chg</div>
          </div>
          {this.state.stocks.map(stock => <StockRow key={stock.symbol} {...stock} />)}
        </div>
      </div>
    );
  }
}

export default Stocks;
