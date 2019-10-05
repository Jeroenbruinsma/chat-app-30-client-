import React, { Component } from "react";
import { url } from "../constants";
import ChatroomForm from "./ChatroomForm";
import { connect } from "react-redux";
import { addMessages } from "../actions";

class Chatroom extends Component {
  source = new EventSource(`${url}/stream`);
  componentDidMount() {
    //console.log("component did mount",this.source)
    this.source.onmessage = event => {
      //console.log('got an event?', event.data)
      const messages = JSON.parse(event.data);
      //console.log("data is:",messages)
      this.props.addMessages(messages);
    };
  }

  render() {
    console.log(" render of chatroom props:", this.props);
    return (
      <div>
        <ul>
          {this.props.messages.map(message => {
            return <li key={message.id}> {message.message} </li>;
          })}
        </ul>
        <ChatroomForm />{" "}
      </div>
    );
  }
}
function mapStateToProps(reduxStore) {
  console.log("hello from mapStateToProps", reduxStore);
  return {
    messages: reduxStore.messages
  };
}
const mapDispatchToProps = { addMessages };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
