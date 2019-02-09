import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="nav-left">
                <div className="logo-area">
                    <img src={Logo} alt="logo" className="logo-img"/>
                    <Link to="/" className="logo">CSR-tool pro</Link>
                </div>
            </div>
            <div className="nav-right">
                <Link to="/sign-in" >Sign In</Link>
                <Link to="/sign-up" className="sign-up">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar;