import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import CncrtContext from "../CncrtContext";

class Login extends Component {
  static contextType = CncrtContext;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    let user;
    const { username, password } = this.state;
    if(!this.context.artists.find(artist => artist.username === username)) {
        return alert('User does not exist')
    } else if (user = this.context.artists.find(artist => artist.username === username)) {
        if (user.password !== password) {
            return alert('wrong password')
        }
    }
    this.props.history.push(`/results/${user.id}`);
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
  render() {
    return (
      <div className="loginPage">
        <Link to="/">CNCRT</Link>

        <h1 className="loginTitle">CNCRT</h1>

        <form className="loginForm" onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUserNameChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
          <button type="submit" className="loginSubmitButton">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
