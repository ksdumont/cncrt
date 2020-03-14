import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import CncrtContext from "../CncrtContext";

class LandingPage extends Component {
  static contextType = CncrtContext;
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    let { searchText } = this.state;
    searchText = searchText.toLowerCase().trim();
    this.props.history.push({
      pathname: "/results",
      search: `?query=${searchText}`
    });
  };

  handleSearchTextChange = e => {
    const searchText = e.target.value;
    this.setState({
      searchText
    });
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
          <h3 className="description-text">
            CNCRT directly connects users with artists to book for an intimate
            concert. Search local artist profiles in your area to book a concert
            in your home for you and your friends. Register as an artist to
            start building your profile and book your first gig!
          </h3>
        </section>

        <form className="landingSearch" onSubmit={this.handleSubmit}>
          <label>Search Artists</label>
          <input
            className="landingSearchText"
            type="text"
            value={this.state.searchText}
            onChange={this.handleSearchTextChange}
            required
            placeholder="City"
          />
          <button className="landingSearchButton">Search</button>
        </form>
      </div>
    );
  }
}
export default LandingPage;
