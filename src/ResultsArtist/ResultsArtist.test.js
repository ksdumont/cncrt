import React from "react";
import ReactDOM from "react-dom";
import ResultsArtist from "./ResultsArtist";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResultsArtist />, div);
  ReactDOM.unmountComponentAtNode(div);
});
