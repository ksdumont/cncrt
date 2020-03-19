import React, { Component } from "react";
import "./ResultsPage.css";
import { Link } from "react-router-dom";
import CncrtContext from "../CncrtContext";
import Artist from "../Artist/Artist";

class ResultsPage extends Component {
  static contextType = CncrtContext;
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      formSubmitted: false
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
    this.setState({
      searchText: "",
      formSubmitted: true
    });
  };
  handleSearchTextChange = e => {
    const searchText = e.target.value;
    this.setState({
      searchText
    });
  };
  handleClick = id => {
    this.props.history.push(`/results/${id}`);
  };
  render() {
    const location = this.props.location.search.substring(7);
    const artistResults = this.context.artists.filter(artist =>
      artist.location !== null
        ? artist.location.toLowerCase().trim() === location
        : null
    );
    let artists;
    if (artistResults.length === 0) {
      artists = this.context.artists;
    } else {
      artists = artistResults;
    }

    return (
      <div className="resultsPage">
        <Link to="/" className="results-nav">
          <img src="/favicon.ico" alt="favicon" />
        </Link>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <label>Search Artists</label>
          <input
            type="text"
            placeholder="City"
            value={this.state.searchText}
            onChange={this.handleSearchTextChange}
            required
          />
          <button type="submit">Search</button>
        </form>
        {this.state.formSubmitted === true && artistResults.length === 0 ? (
          <div className="result-message">
            No artists were found in your city but check out these artists who
            are willing to travel to you!
          </div>
        ) : (
          ""
        )}
        <section className="results">
          <ul className="resultsList">
            {artists
              .filter(artist => artist.image !== null)
              .map(artist => (
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
