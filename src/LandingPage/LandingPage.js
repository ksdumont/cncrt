import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import CncrtContext from "../CncrtContext";

class LandingPage extends Component {
  static contextType = CncrtContext;
  handleClick = e => {
    e.preventDefault();
    this.props.history.push("./results");
  };
  render() {
    return (
      <div className="landingPage">
        <nav className="landingNav">
          <button onClick={this.handleClick} className="bookButton">
            Book Concert
          </button>{" "}
          <div className="line"> | </div>
          <Link to="/Login">Login</Link>
        </nav>

        <h1 className="landingTitle">CNCRT</h1>

        <section className="description">
          <h3 className="description-text">
            A private intimate concert brought to your home. Book artists
            directly. Demo the app by logging in with username: zekefinn and password: zekefinn.
          </h3>
        </section>
        <section className="image-rows">
          <img src="./images/image1.jpg" alt="album cover" />
          <img src="./images/image2.jpg" alt="album cover" />
          <img src="./images/image3.jpg" alt="album cover" />
          <img src="./images/image7.jpg" alt="album cover" />
          <img src="./images/image8.jpg" alt="album cover" />
          <img src="./images/image10.jpg" alt="album cover" />
          <img src="./images/image13.jpg" alt="album cover" />
          <img src="./images/image15.jpg" alt="album cover" />
          <img src="./images/image16.jpg" alt="album cover" />
          <img src="./images/image17.jpg" alt="album cover" />
          <img src="./images/image18.jpg" alt="album cover" />
          <img src="./images/image19.jpg" alt="album cover" />
        </section>
        <section className="home-register">
          <Link className="artist-register-link" to="/Register">
            Artist Register Here
          </Link>
        </section>
      </div>
    );
  }
}
export default LandingPage;
