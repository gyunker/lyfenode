import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import HealthChart from "./components/HealthChart/HealthChart";
import CreateProfile from "./components/Profile/CreateProfile/CreateProfile";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import FinancialOverview from "./components/FinancialOverview/FinancialOverview";
import "./App.css";
import PrivateRoute from "./components/common/PrivateRoute";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        {/* TODO: Use Private route */}
        <Route
          path="/health/:field"
          render={({ match }) => (
            <HealthChart sampleField={match.params.field} />
          )}
        />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Switch>
          <PrivateRoute path="/health/weight" render={() => <HealthChart />} />
        </Switch>
        <Switch>
          <PrivateRoute path="/create-profile" component={CreateProfile} />
        </Switch>
        <Switch>
          <PrivateRoute path="/edit-profile" component={EditProfile} />
        </Switch>
        {/* <Switch>
          <PrivateRoute
            path="/health/:field"
            render={({ match }) => (
              <HealthChart sampleField={match.params.field} />
            )}
          />
        </Switch> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/health/weight" render={() => <HealthChart />} />
        <Route exact path="/financialoverview" component={FinancialOverview} />
      </Wrapper>
    </Router>
  </Provider>
);

export default App;
