import React, { Component } from "react";
import "./styles.css";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
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
                        Sign Up
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
                        <label htmlFor="last-name">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="first-name">First Name</label>
                        <input 
                            type="text" 
                            id="firstName"
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

export default SignUp;