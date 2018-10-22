import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HealthChart from "./components/HealthChart/HealthChart";
import "./App.css";

const App = () => (
  <Wrapper>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/health/weight" render={() => <HealthChart />} />
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
