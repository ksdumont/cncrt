import React, { Component } from "react";
import CncrtContext from "../CncrtContext";
import { Link } from "react-router-dom";
import "./Profile.css";

class Profile extends Component {
  static contextType = CncrtContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      image: "",
      bio: "",
      website: "",
      music: "",
      video: "",
      rate: "",
      location: "",
      travel: true,
      contact: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({
      name
    });
  };
  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({
      email
    });
  };
  handleUserNameChange = e => {
    const username = e.target.value;
    this.setState({
      username
    });
  };
  handlePasswordChange = e => {
    const password = e.target.value;
    this.setState({
      password
    });
  };
  handleImageChange = e => {
    const image = e.target.value;
    this.setState({
      image
    });
  };
  handleBioChange = e => {
    const bio = e.target.value;
    this.setState({
      bio
    });
  };
  handleWebsiteChange = e => {
    const website = e.target.value;
    this.setState({
      website
    });
  };
  handleMusicChange = e => {
    const music = e.target.value;
    this.setState({
      music
    });
  };
  handleVideoChange = e => {
    const video = e.target.value;
    this.setState({
      video
    });
  };
  handleRateChange = e => {
    const rate = e.target.value;
    this.setState({
      rate
    });
  };
  handleLocationChange = e => {
    const location = e.target.value;
    this.setState({
      location
    });
  };
  handleContactChange = e => {
    const contact = e.target.value;
    this.setState({
      contact
    });
  };
  render() {
    const currentArtist = this.context.artists.find(
      artist => artist.id == this.props.match.params.artistId
    );
    return (
      <div className="profile">
        <Link to="/">CNCRT</Link>
        <h1 className="artist-name">{currentArtist.name}</h1>
        <form className="profile-form" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <label>Link to Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleImageChange}
            required
          />
          <label>Bio:</label>
          <input
            type="text"
            name="bio"
            value={this.state.bio}
            onChange={this.handleBioChange}
            required
          />
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={this.state.website}
            onChange={this.handleWebsiteChange}
            required
          />
          <label>Music:</label>
          <input
            type="text"
            name="music"
            value={this.state.music}
            onChange={this.handleMusicChange}
            required
          />
          <label>Video:</label>
          <input
            type="text"
            name="video"
            value={this.state.video}
            onChange={this.handleVideoChange}
            required
          />
          <label>Rate:</label>
          <input
            type="text"
            name="rate"
            value={this.state.rate}
            onChange={this.handleRateChange}
            required
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleLocationChange}
            required
          />
          <label>Contact:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <button type="submit" className="profileSubmitButton">
            Update Profile
          </button>
        </form>
      </div>
    );
  }
}
export default Profile;
