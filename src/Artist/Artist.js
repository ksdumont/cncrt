import React, { Component } from "react";
import CncrtContext from "../CncrtContext";
import "./Artist.css";

class Artist extends Component {
  static contextType = CncrtContext;
  state = {};
  render() {
    return (
      <div className="artist-list">
        <img src={this.props.image} alt="artist" />
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Artist;
