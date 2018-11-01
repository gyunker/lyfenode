const axios = require("axios");
const keys = require("../config/keys");

const Plaid = {
  exchangeToken: function(token) {
    return axios.post("https://sandbox.plaid.com/item/public_token/exchange", {
      client_id: keys.axios.client_id,
      secret: keys.axios.secret,
      public_token: token
    });
  },
  getBalance: function(token) {
    return axios.post("https://sandbox.plaid.com/accounts/balance/get", {
      client_id: keys.axios.client_id,
      secret: keys.axios.secret,
      access_token: token
    });
  },
  getTransactions: function(token) {
    return axios.post("https://sandbox.plaid.com/transactions/get", {
      client_id: keys.axios.client_id,
      secret: keys.axios.secret,
      access_token: token,
      start_date: "2018-01-01",
      end_date: "2018-12-01",
      options: {
        count: 500
      }
    });
  },
  filterTransactionCategories: function(transactions) {
    let organizedTransactions = [];
    const categories = [
      "Travel",
      "Payment",
      "Recreation",
      "Food and Drink",
      "Shops"
    ];

    categories.map(category => {
      let group = transactions.filter(t => t.category.includes(category));
      organizedTransactions.unshift({ category, transactions: group });
    });
    return organizedTransactions;
  }
};

module.exports = Plaid;
