import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import LandingPage from "./LandingPage/LandingPage";
import Profile from "./Profile/Profile";
import ResultsPage from "./ResultsPage/ResultsPage";
import CncrtContext from "./CncrtContext";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: []
    };
  }
  render() {
    return (
      <CncrtContext.Provider value={this.state}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/results" component={ResultsPage} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/:artistId" component={Profile} />
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </CncrtContext.Provider>
    );
  }
}

export default App;
