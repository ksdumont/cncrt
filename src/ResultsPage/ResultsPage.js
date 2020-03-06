import React, { Component } from "react";
import "./ResultsPage.css";
import { Link } from "react-router-dom";
import CncrtContext from "../CncrtContext";
import Artist from "../Artist/Artist";

class ResultsPage extends Component {
  static contextType = CncrtContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
  };
  handleClick = id => {
    this.props.history.push(`/results/${id}`);
  };
  render() {
    return (
      <div className="resultsPage">
        <Link to="/">CNCRT</Link>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <label>Search Artists</label>
          <input type="text" placeholder="City or Zipcode" />
          <button type="submit">Search</button>
        </form>
        <section className="results">
          <ul className="resultsList">
            {this.context.artists.map(artist => (
              <li key={artist.id} onClick={() => this.handleClick(artist.id)}>
                <Artist
                  id={artist.id}
                  name={artist.name}
                  image={artist.image}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
export default ResultsPage;
