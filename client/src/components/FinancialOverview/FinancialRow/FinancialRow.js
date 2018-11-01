import React from "react";
import Finance from "../../../utils/Finance";
import PropTypes from "prop-types";
import numeral from "numeral";

const FinancialRow = props => {
  let Transactions = [];
  let totalFinanceAmount = "";
  let monthlyAmount = [];
  let vsLastMonth = [];
  let threeMonthAverage = [];
  let vsThreeMonthAverage = [];
  if (props.category) {
    Transactions = props.category[0].transactions;
    totalFinanceAmount = Finance.GetTransactionTotal(
      Finance.ParseTransactionAmounts(Transactions)
    );
    monthlyAmount = Finance.ParseTransactionAmounts(
      Finance.GetCurrentMonthTotal(Transactions)
    );
    monthlyAmount = Finance.GetTransactionTotal(monthlyAmount);
    vsLastMonth = Finance.ParseTransactionAmounts(
      Finance.GetLastMonthTotal(Transactions)
    );
    vsLastMonth = Finance.GetTransactionTotal(vsLastMonth);
    vsLastMonth = Finance.GetDiffVsLastMonth(vsLastMonth, monthlyAmount);
    threeMonthAverage = Finance.GetThreeMonthAverage(Transactions);
    vsThreeMonthAverage = Finance.GetDiffVsThreeMonthAverage(
      monthlyAmount,
      threeMonthAverage
    );
  }
  return (
    <React.Fragment>
      <td>${numeral(monthlyAmount).format("0,0")}</td>
      <td>${numeral(vsLastMonth).format("0,0")}</td>
      <td>${numeral(vsThreeMonthAverage).format("0,0")}</td>
      <td>${numeral(totalFinanceAmount).format("0,0")}</td>
    </React.Fragment>
  );
};

FinancialRow.propTypes = {
  category: PropTypes.array.isRequired
};

export default FinancialRow;
