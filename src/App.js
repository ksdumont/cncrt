import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      artists: []
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:artistId" component={Profile} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
