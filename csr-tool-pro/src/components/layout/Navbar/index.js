import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Modal from "react-modal";
import Logo from "../../../assets/logo.png";

class Navbar extends Component {
    state = {
        modalIsOpen: false
    };

    recognizeInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    openModal = (event) => {
        event.preventDefault();
        this.setState({ 
            modalIsOpen: true
        });
    }

    closeModal = () =>  {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        return (
            <div>
            <div id="page-wrap">
                <nav className="navbar-container">
                    <div className="nav-left">
                        <div className="logo-area">
                            <img src={Logo} alt="logo" className="logo-img"/>
                            <Link to="/" className="logo">CSR-tool pro</Link>
                        </div>
                    </div>
                    {/* <div className="nav-right">
                        <Link to="/sign-in" className="logged-out">Log In</Link>
                        <Link to="/sign-up" className="logged-out sign-up">Sign Up</Link>
                        <Link to="/account"className="logged-in sign-up">Account</Link>
                    </div> */}
                    <div className="nav-right">
                        <li class="logged-in">
                            <a 
                                href="#" 
                                class="modal-trigger" 
                                data-target="modal-account"
                                onClick={this.openModal}
                            >
                                Account
                            </a>
                        </li>
                        <li class="logged-in">
                            <a 
                                href="#" 
                                id="logout"
                                // onClick={this.openModal}
                            >
                                Logout
                            </a>
                        </li>
                        <li class="logged-in">
                            <a 
                                href="#" 
                                class="modal-trigger" 
                                data-target="modal-create"
                                onClick={this.openModal}
                            >
                                Create Announcement
                            </a>
                        </li>
                        <li class="logged-out">
                            <a 
                                href="#" 
                                class="modal-trigger" 
                                data-target="modal-login"
                                onClick={this.openModal}
                            > 
                                Login
                            </a>
                        </li>
                        <li class="logged-out">
                            <a 
                                href="#" 
                                class="modal-signup" 
                                data-target="modal-signup"
                                onClick={this.openModal}
                            >
                                Sign up
                            </a>
                        </li>
                        </div>
                    </nav>
                </div>
                {/* <div id="dialog sign-up">
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        className="modal"
                        overlayClassName="overlay"
                    >
                    <h4 className="warning-text">
                        LOG IN
                    </h4>
                        <input
                            type="text"
                            name="email"
                            maxLength="35"
                            placeholder="email address"
                        >
                        </input>
                    <div className="modal-buttons">
                        <button onClick={this.recognizeDelete}>Sign In</button>
                        <button onClick={this.closeModal}>Cancel</button>
                    </div>
                    </Modal>
                </div> */}
                {/* <!-- SIGN UP MODAL --> */}
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        className="modal"
                        overlayClassName="overlay"
                    >
                    <div id="modal-signup" >
                        <div class="modal-content">
                        <h4>Sign Up</h4>
                        {/* <br /> */}
                        <form id="signup-form">
                            <div class="input-field">
                            <input type="email" id="signup-email" required />
                            <label for="signup-email">Email Address</label>
                            </div>
                            <div class="input-field">
                            <input type="password" id="signup-password" required />
                            <label for="signup-password">Choose Password</label>
                            </div>
                            <button class="btn yellow darken-2 z-depth-0">Sign up</button>
                        </form>
                        </div>
                    </div>
                    </Modal>
                    {/* <!-- LOGIN MODAL --> */}
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        className="modal"
                        overlayClassName="overlay"
                    >
                    <div id="modal-login">
                        <div class="modal-content">
                        <h4>Login</h4>
                        <form id="login-form">
                            <div class="input-field">
                            <input type="email" id="login-email" required />
                            <label for="login-email">Email address</label>
                            </div>
                            <div class="input-field">
                            <input type="password" id="login-password" required />
                            <label for="login-password">Your password</label>
                            </div>
                            <button class="btn yellow darken-2 z-depth-0">Login</button>
                        </form>
                        </div>
                    </div>
                    </Modal>
                    {/* <!-- ACCOUNT MODAL --> */}
                    {/* <div id="modal-account" class="modal">
                        <div class="modal-content center-align">
                        <h4>Account details</h4><br />
                        <div class="account-details"></div>
                        </div>
                    </div> */}
                    {/* <!-- CREATE GUIDE MODAL --> */}
                    {/* <div id="modal-create" class="modal">
                        <div class="modal-content">
                        <h4>Create Guide</h4><br />
                        <form id="create-form">
                            <div class="input-field">
                            <input type="text" id="title" required >
                            <label for="title">Guide Title</label>
                            </div>
                            <div class="input-field">
                            <textarea id="content" class="materialize-textarea" required></textarea>
                            <label for="content">Guide Content</label>
                            </div>
                            <button class="btn yellow darken-2 z-depth-0">Create</button>
                        </form>
                        </div>
                    </div> */}
                </div>
        )
    }
}

export default Navbar;