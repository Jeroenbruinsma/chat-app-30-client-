import React, { Component } from "react";
import * as request from "superagent";
import { url } from "../constants";

export default class Signup extends Component {
  state = {
    username: "",
    password: ""
  };
  onSubmit = event => {
    event.preventDefault();
    console.log(
      this.state.username,
      this.state.password
    );
    request
      .post(`${url}/user`)
      .send({ email: this.state.username, password: this.state.password })
      .catch(error => console.log("got an error", error));
  };
  onChangeEmail = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Make a new user account</h2>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            type="text"
            onChange={this.onChangeEmail}
            value={this.state.newMessage}
            placeholder="email"
          ></input>

          <input
            name="password"
            type="text"
            onChange={this.onChangePassword}
            value={this.state.newMessage}
            placeholder="password"
          ></input>

          <button type="Submit">Make new account</button>
        </form>
      </div>
    );
  }
}
