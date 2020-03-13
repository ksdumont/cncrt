import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import CncrtContext from "../CncrtContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const artists = [];
  ReactDOM.render(
    <CncrtContext.Provider value={{ artists }}>
      <Profile />
    </CncrtContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
