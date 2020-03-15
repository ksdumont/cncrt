import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IncompleteProfile.css";

export default class IncompleteProfile extends Component {
  handleClick = id => {
    this.props.history.push(`/profile/${id}`);
  };
  render() {
    return (
      <div>
        <Link to="/results">CNCRT</Link>
        <div className="incomplete">
          <h1>Incomplete Profile</h1>
          <button
            className="incomplete-button"
            onClick={() => this.handleClick(this.props.match.params.artistId)}
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}
