import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import HealthChart from "./components/HealthChart/HealthChart";
import "./App.css";

const App = () => (
  <Router>
    <Wrapper>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/health/weight" render={() => <HealthChart />} />
    </Wrapper>
  </Router>
);

export default App;
