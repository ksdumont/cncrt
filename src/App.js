import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import LandingPage from "./LandingPage/LandingPage";
import ResultsArtist from "./ResultsArtist/ResultsArtist";
import ResultsPage from "./ResultsPage/ResultsPage";
import Profile from "./Profile/Profile";
import IncompleteProfile from "./IncompleteProfile/IncompleteProfile"
import CncrtContext from "./CncrtContext";
import config from "./config";
import "./App.css";
require("dotenv").config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: [],
      addArtist: (newArtist, cb) => {
        fetch(`${config.API_BASE_URL}/api/artists`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(newArtist)
        })
          .then(res => res.json())
          .then(newArtist =>
            this.setState(
              { artists: [...this.state.artists, newArtist] },
              cb(newArtist.id)
            )
          )
          .catch(error => {
            console.error({ error });
          });
      },
      updateArtist: (artistUpdate, artistId, cb) => {
        fetch(`${config.API_BASE_URL}/api/artists/${artistId}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(artistUpdate)
        }).then(res => {
          if (res.status === 204) {
            fetch(`${config.API_BASE_URL}/api/artists`)
              .then(res => res.json())
              .then(artists => {
                this.setState(
                  {
                    artists
                  },
                  cb(artistId)
                );
              })
              .catch(error => console.error({ error }));
          }
        });
      }
    };
  }
  componentDidMount() {
    fetch(`${config.API_BASE_URL}/api/artists`)
      .then(res => res.json())
      .then(artists =>
        this.setState({
          artists
        })
      )
      .catch(error => console.error({ error }));
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
              <Route exact path="/incomplete/:artistId" component={IncompleteProfile} />
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </CncrtContext.Provider>
    );
  }
}

export default App;
