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
    console.log(artistData);
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
            <Link to={artistData.website}>{artistData.website}</Link>
          </div>
          <div className="music">Link to Music:</div>
          <div>
            <Link to={artistData.music}>{artistData.music}</Link>
          </div>
          <div className="video">Link to Video:</div>
          <div>
            <Link to={artistData.video}>{artistData.video}</Link>
          </div>
          <div className="rate">Hourly Rate:</div>
          <div>{artistData.rate}</div>
          <div className="location">Location:</div>
          <div>{artistData.location}</div>
          <div className="travel-distance">Willing to travel:</div>
          <div>{artistData.travel ? "Yes" : null}</div>
          <div className="contact">Contact:</div>
          <div>{artistData.contact}</div>
        </section>
      </div>
    );
  }
}
export default ResultsArtist;
