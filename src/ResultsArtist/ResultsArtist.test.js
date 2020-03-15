import React from "react";
import ReactDOM from "react-dom";
import ResultsArtist from "./ResultsArtist";
import CncrtContext from "../CncrtContext";
import {BrowserRouter as Router} from "react-router-dom"

it("renders without crashing", () => {
  const div = document.createElement("div");
  const artists = [];
  ReactDOM.render(
    <CncrtContext.Provider value={{ artists }}>
      <Router>
        <ResultsArtist />
      </Router>
    </CncrtContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
