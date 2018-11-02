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
  },
  GetTransactionTotalsObject(TArray) {
    let shops = TArray.filter(x => x.category === "Shops");
    let food = TArray.filter(x => x.category === "Food and Drink");
    let recreation = TArray.filter(x => x.category === "Recreation");
    let bills = TArray.filter(x => x.category === "Payment");
    let travel = TArray.filter(x => x.category === "Travel");
    shops = this.GetTransactions(shops);
    shops = this.GetTransactionTotal(
      this.ParseTransactionAmounts(this.GetCurrentMonthTotal(shops[0]))
    );

    food = this.GetTransactions(food);
    food = this.GetTransactionTotal(
      this.ParseTransactionAmounts(this.GetCurrentMonthTotal(food[0]))
    );

    recreation = this.GetTransactions(recreation);
    recreation = this.GetTransactionTotal(
      this.ParseTransactionAmounts(this.GetCurrentMonthTotal(recreation[0]))
    );

    bills = this.GetTransactions(bills);
    bills = this.GetTransactionTotal(
      this.ParseTransactionAmounts(this.GetCurrentMonthTotal(bills[0]))
    );

    travel = this.GetTransactions(travel);
    travel = this.GetTransactionTotal(
      this.ParseTransactionAmounts(this.GetCurrentMonthTotal(travel[0]))
    );
    let transactions = [bills, food, travel, shops, recreation];
    return transactions;
  }
};

export default Finance;
