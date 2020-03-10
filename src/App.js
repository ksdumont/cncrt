import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import LandingPage from "./LandingPage/LandingPage";
import ResultsArtist from "./ResultsArtist/ResultsArtist";
import ResultsPage from "./ResultsPage/ResultsPage";
import Profile from "./Profile/Profile";
import CncrtContext from "./CncrtContext";
import store from "./store";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: store,
      addArtist: newArtist =>
        this.setState({ artists: [...this.state.artists, newArtist] }),
      updateArtist: (artistUpdate, artistId) =>
        this.setState({
          artists: this.state.artists.map(artist =>
            artist.id !== artistId ? artist : artistUpdate
          )
        })
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
              <Route exact path="/profile/:artistId" component={Profile} />
              <Route
                exact
                path="/results/:artistId"
                component={ResultsArtist}
              />
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </CncrtContext.Provider>
    );
  }
}

export default App;
