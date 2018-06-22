import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";

import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
