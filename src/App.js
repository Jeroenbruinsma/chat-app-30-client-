import React from 'react'
import './App.css';
import Chatroom from './components/Chatroom';
import Signup from './components/Signup';
import Login from './components/Login';

class App extends React.Component {
  
  render (){
    return ( <div>
      <h1> jeroen's chat app </h1>
    <Chatroom/>

    <Signup/>
    <Login/>
    </div>
    )}
    

}

export default App;
