// import moment from "moment";

const Finance = {
  GetTransactionTotal: function(TArray) {
    return Math.trunc(TArray.reduce((a, b) => a + b));
  },
  ParseTransactionAmounts(TArray) {
    return TArray.map(t => t.amount);
  },
  GetTransactions(CArray) {
    return CArray.map(c => c.transactions);
  },
  GetCurrentMonthTotal(TArray) {
    return TArray.filter(
      transaction => transaction.date.indexOf("2018-09") === 0
    );
  },
  GetLastMonthTotal(TArray) {
    return TArray.filter(
      transaction => transaction.date.indexOf("2018-08") === 0
    );
  },
  GetDiffVsLastMonth(lastMonthTotal, currentTotal) {
    return (
      lastMonthTotal + (Math.floor(Math.random() * 1000) - 500) - currentTotal
    );
  },
  GetThreeMonthAverage(TArray) {
    let fourMonthsAgo = TArray.filter(
      transaction => transaction.date.indexOf("2018-06") === 0
    );
    fourMonthsAgo = this.GetTransactionTotal(
      this.ParseTransactionAmounts(fourMonthsAgo)
    );
    let threeMonthsAgo = TArray.filter(
      transaction => transaction.date.indexOf("2018-07") === 0
    );
    threeMonthsAgo = this.GetTransactionTotal(
      this.ParseTransactionAmounts(threeMonthsAgo)
    );
    let twoMonthsAgo = TArray.filter(
      transaction => transaction.date.indexOf("2018-07") === 0
    );
    twoMonthsAgo = this.GetTransactionTotal(
      this.ParseTransactionAmounts(twoMonthsAgo)
    );

    let average = (fourMonthsAgo + threeMonthsAgo + twoMonthsAgo) / 3;
    return average;
  },
  GetDiffVsThreeMonthAverage(currentMonth, threeMonthAverage) {
    return (
      threeMonthAverage +
      (Math.floor(Math.random() * 1000) - 500) -
      currentMonth
    );
  }
};

export default Finance;
