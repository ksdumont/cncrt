import React from "react";
import ReactDOM from "react-dom";
import ResultsArtist from "./ResultsArtist";
import CncrtContext from "../CncrtContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const artists = [];
  ReactDOM.render(
    <CncrtContext.Provider value={{ artists }}>
      <ResultsArtist />
    </CncrtContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
