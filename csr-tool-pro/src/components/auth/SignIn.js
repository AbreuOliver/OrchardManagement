import React, { Component } from "react";
import "./styles.css";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div className="sign-in-container">
                <form 
                    onSubmit={this.handleSubmit} 
                    className="white"
                >
                    <h5>
                        Sign In
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;