import React, { Component } from "react";
import * as request from "superagent";
import { url } from "../constants";
import { connect } from "react-redux";

class ChatroomForm extends Component {
  state = {
    newMessage: "Type here....."
  };
  onChange = event => {
    this.setState({ newMessage: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log("form submited");
    request
      .post(`${url}/message`)
      .send({ message: this.state.newMessage })
      .catch(error => console.log("got an error", error));
  };

  render() {
    console.log("chatroomform", this.props);

    if (!this.props.login.jwt) return "please login";

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="newMessage"
            type="text"
            onChange={this.onChange}
            value={this.state.newMessage}
          ></input>
          <button type="submit">Send!</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return { login: reduxState.login };
}

export default connect(
  mapStateToProps,
  null
)(ChatroomForm);
