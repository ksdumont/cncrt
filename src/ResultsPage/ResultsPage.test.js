import React from "react";
import ReactDOM from "react-dom";
import ResultsPage from "./ResultsPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResultsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
