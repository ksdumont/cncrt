import React from "react";
import ReactDOM from "react-dom";
import ResultsPage from "./ResultsPage";
import CncrtContext from "../CncrtContext";
import { BrowserRouter as Router } from "react-router-dom" 

it("renders without crashing", () => {
  const artists = [];
  const location = { search: "" };
  const div = document.createElement("div");
  ReactDOM.render(
    <CncrtContext.Provider value={{ artists }}>
      <Router>
        <ResultsPage location={location} />
      </Router>
    </CncrtContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
