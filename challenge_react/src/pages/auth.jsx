import React, { Component } from 'react';
import Header from "../components/header"
import axios from "axios"
import { withRouter } from 'react-router-dom'

class Auth extends Component {
    state = {
        username : '',
        password : ''
    }

    setInput = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }

    afterSignin = () => {
        const { username, password } = this.state
        const self = this
        const input = {
            username : username,
            password : password
        }
        axios
            .post("https://authaltab4.free.beeceptor.com/auth", input)
            .then(function(response) {
                console.warn(response.data)
                if(response.data.hasOwnProperty("token")) {
                    localStorage.setItem("username", response.data.username)
                    localStorage.setItem("email", response.data.email)
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("auth", true)
                    self.props.history.push("/profile")
                }
            })
            .catch(function(error) {
                console.log(error)
            })
    }
    

    render () {
        return (
            <div>
                <Header {...this.props} />
                <div className="auth text-center">
                    <form onSubmit={e => e.preventDefault()}>
                        <h3>Masuk</h3>
                        <div className="input-box">
                            <input 
                                type="text" 
                                name="username"
                                placeholder="username" 
                                onChange={e => this.setInput(e)} 
                            />
                        </div>
                        <div className="input-box">
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="password" 
                                onChange={e => this.setInput(e)} 
                            />
                        </div>
                        <div className="input-box">
                            <button className="auth-button"
                                onClick={() => this.afterSignin()}>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>    
        );
    }
}

export default withRouter(Auth);