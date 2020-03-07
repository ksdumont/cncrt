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
    console.log(this.state)
  }
  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      email,
      username,
      password,
      image,
      bio,
      website,
      music,
      video,
      rate,
      location,
      travel,
      contact
    } = this.state;
    const updatedUserProfile = {
      image,
      bio,
      website,
      music,
      video,
      rate,
      location,
      travel,
      contact
    };
    const artistFind = this.context.artists.find(
      artist => artist.id == this.props.match.params.artistId
    );
    const artistUpdate = {...artistFind, ...updatedUserProfile}
    this.context.artists = [...this.context.artists.filter(artist => artist.id !== artistFind.id), artistUpdate]
    console.log(this.context.artists)
    this.props.history.push(`/results/${artistFind.id}`);
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
    console.log(this.context.artists)
    console.log(currentArtist)
    console.log(this.state)
    return (
      <div className="profile">
        <Link to="/">CNCRT</Link>
        <h1 className="artist-name">{currentArtist.name}</h1>
        <form className="profile-form" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={currentArtist.name || this.state.name}
            placeholder={currentArtist.name}
            onChange={this.handleNameChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={currentArtist.email || this.state.email}
            placeholder={currentArtist.email}
            onChange={this.handleEmailChange}
          />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={currentArtist.username || this.state.username}
            placeholder={currentArtist.username}
            onChange={this.handleUserNameChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={currentArtist.password || this.state.password}
            placeholder={currentArtist.password}
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
            type="url"
            name="website"
            value={this.state.website}
            onChange={this.handleWebsiteChange}
            required
          />
          <label>Music:</label>
          <input
            type="url"
            name="music"
            value={this.state.music}
            onChange={this.handleMusicChange}
            required
          />
          <label>Video:</label>
          <input
            type="url"
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
