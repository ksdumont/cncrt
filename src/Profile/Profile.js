import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import CncrtContext from "../CncrtContext";

class Profile extends Component {
  static contextType = CncrtContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="profilePage">
        <Link to="/results" className="cncrtNav">
          CNCRT
        </Link>
        <section className="imageName">
          <img
            contentEditable="true"
            alt="artist"
            src="https://static.wixstatic.com/media/79421a_5534c5fcf3184831b20eb940fc35cfb8~mv2.jpg/v1/crop/x_0,y_136,w_1080,h_536/fill/w_975,h_485,al_c,q_85,usm_0.66_1.00_0.01/Zeke%20Studio%20Pic.webp"
          />
          <h1 contentEditable="true">Zeke Finn</h1>
        </section>
        <section className="content">
          <div className="bio">Bio:</div>
          <div contentEditable="true">This text can be edited by the user.</div>
          <div className="website">Link to Website:</div>
          <div contentEditable="true">This text can be edited by the user.</div>
          <div className="music">Link to Music:</div>
          <div contentEditable="true">This text can be edited by the user.</div>
          <div className="video">Link to Video:</div>
          <div contentEditable="true">This text can be edited by the user.</div>
          <div className="rate">Hourly Rate:</div>
          <div contentEditable="true">This text can be edited by the user.</div>
          <div className="location">Location:</div>
          <div contentEditable="true">This text can be edited by the user.</div>
          <div className="travel-distance">Willing to travel:</div>
          <div contentEditable="true">This text can be edited by the user.</div>
          <div className="contact">Contact:</div>
          <div contentEditable="true">This text can be edited by the user.</div>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="updateButton"
          >
            Update
          </button>
        </section>
      </div>
    );
  }
}

export default Profile;
