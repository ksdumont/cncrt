import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import CncrtContext from "../CncrtContext";

class LandingPage extends Component {
  static contextType = CncrtContext;
  handleClick = e => {
    e.preventDefault()
    this.props.history.push('./results')
  }
  render() {
    return (
      <div className="landingPage">
        <nav className="landingNav">
          <Link to="/">CNCRT</Link> |<Link to="/Login">Login</Link>
        </nav>

        <h1 className="landingTitle">CNCRT</h1>

        <section className="description">
          <h3 className="description-text">
            A private intimate concert brought to your home. Book artists
            directly.
          </h3>
        </section>
        <section className="book-register">
          <button onClick={this.handleClick} className="bookButton">Book Concert</button>
          <Link className="artist-register-link" to="/Register">
            Artist Register
          </Link>
        </section>
      </div>
    );
  }
}
export default LandingPage;
