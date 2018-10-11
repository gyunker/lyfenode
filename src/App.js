import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

const App = () => (
  <Wrapper>
    <Navbar />
    <Dashboard />
  </Wrapper>
);

export default App;
