import React, { Component } from 'react'
import * as request from 'superagent'
import {url} from '../constants'
import {connect} from 'react-redux'
import {login} from '../actions'

class Login extends Component {
    state= {
        username: "",
        password: ""
    }
    
    onSubmit = (event) =>{
        event.preventDefault()
        console.log("hello from onsubmit", this.state.username, this.state.password);
        request.post(`${url}/login`)
            .send({email: this.state.username , password: this.state.password})
            .then(result => {console.log("result",result.body)
                this.props.login(result.body)
            }
            
            )

            .catch(error => console.log("got an error",error)) 
    } 
    onChangeEmail = (event) => {
        this.setState({username: event.target.value})
    }
    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    type="text"
                    onChange={this.onChangeEmail}
                    value={this.state.newMessage}
                    placeholder="email"   >
                        </input>

                        <input
                    name="password"
                    type="text"
                    onChange={this.onChangePassword}
                    value={this.state.newMessage}
                    placeholder="passwords"   >
                        </input>
                        <button type="submit">login </button>
                </form>
            </div>
        )
    }
}
export default connect(null,{login})(Login)