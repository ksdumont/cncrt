import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import CncrtContext from "../CncrtContext";

class LandingPage extends Component {
  static contextType = CncrtContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = e => {
    e.preventDefault();
    this.props.history.push(`/results`);
  };
  render() {
    return (
      <div className="landingPage">
        <nav className="landingNav">
          <Link to="/">CNCRT</Link> |<Link to="/Register">Register</Link> |
          <Link to="/Login">Login</Link>
        </nav>

        <h1 className="landingTitle">CNCRT</h1>

        <section className="description">
          <h3>
            CNCRT directly connects users with artists to book for an intimate
            concert. Search local artist profiles in your area to book a concert
            in your home for you and your friends. Register as an artist to
            start building your profile and book your first gig!
          </h3>
        </section>

        <form className="landingSearch">
          <label>Search for artists by city or zip code:</label>
          <input className="landingSearchText" type="text" />
          <button className="landingSearchButton" onClick={this.handleClick}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default LandingPage;
