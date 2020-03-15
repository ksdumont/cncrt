import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import IncompleteProfile from "./IncompleteProfile";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <IncompleteProfile />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
