import React, { Component } from "react";
import "./App.css";
import Mainpage from "./Components/Mainpage";
import { HashRouter, Route } from "react-router-dom";
import { WrappedRegistrationForm } from "./Components/Account";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={Mainpage} />
          <Route path="/Account" component={WrappedRegistrationForm} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
