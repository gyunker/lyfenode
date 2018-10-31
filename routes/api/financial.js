const router = require("express").Router();
const Plaid = require("../../utils/Plaid");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

router.get("/test", (req, res) => {
  var tokenH = req.headers.authorization;
  var token = tokenH.split(" ")[1];
  var data = jwt.decode(token);
  res.send(`User: ${JSON.stringify(data)}`);
});

router.get("/ex/:token", (req, res) => {
  const jwtToken = req.headers.authorization.split(" ")[1];
  const pubToken = req.params.token;
  Plaid.exchangeToken(pubToken)
    .then(resp => {
      var { id, name, avatar } = jwt.decode(jwtToken);
      const payload = {
        id,
        name,
        avatar,
        access: resp.data.access_token
      };
      //Sign Token
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token
        });
      });
    })
    .catch(err => res.status(500).send(err));
});

router.get("/balance", (req, res) => {
  console.log(JSON.stringify(req.session.access_token));
  if (req.session.access_token === undefined)
    res.status(404).send({ error: "No account could be found." });
  Plaid.getBalance(req.session.access_token)
    .then(resp => {
      const balance = resp.data.accounts[0].balances;
      res.send(balance);
    })
    .catch(err => console.log(err));
});

router.get("/transactions", (req, res) => {
  var tokenH = req.headers.authorization;
  var token = tokenH.split(" ")[1];
  var data = jwt.decode(token);
  Plaid.getTransactions(data.access)
    .then(resp => {
      const { transactions } = resp.data;
      const filteredTrans = Plaid.filterTransactionCategories(transactions);
      res.send(filteredTrans);
    })
    .catch(err => res.send(err));
});

module.exports = router;
