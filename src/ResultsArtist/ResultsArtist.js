import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ResultsArtist.css";
import CncrtContext from "../CncrtContext";

class ResultsArtist extends Component {
  static contextType = CncrtContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const artistData = this.context.artists.find(
      artist => artist.id === Number(this.props.match.params.artistId)
    );
    if (!artistData) {
      return <div></div>;
    }
    return (
      <div className="profilePage">
        <Link to="/results" className="cncrtNav">
          CNCRT
        </Link>
        <section className="imageName">
          <img alt="artist" src={artistData.image} />
          <h1>{artistData.name}</h1>
        </section>
        <section className="content">
          <div className="bio">Bio:</div>
          <div>{artistData.bio}</div>
          <div className="website">Link to Website:</div>
          <div>
            <a
              href={artistData.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artistData.website}
            </a>
          </div>
          <div className="music">Link to Music:</div>
          <div>
            <a
              href={artistData.music}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artistData.music}
            </a>
          </div>
          <div className="video">Link to Video:</div>
          <div>
            <a
              href={artistData.video}
              target="_blank"
              rel="noopener noreferrer"
            >
              {artistData.video}
            </a>
          </div>
          <div className="rate">Hourly Rate:</div>
          <div>{artistData.rate}</div>
          <div className="location">Location:</div>
          <div>{artistData.location}</div>
          <div className="travel-distance">Willing to travel:</div>
          <div>{artistData.travel ? "Yes" : null}</div>
          <div className="contact">Contact:</div>
          <div>{artistData.email}</div>
        </section>
      </div>
    );
  }
}
export default ResultsArtist;
