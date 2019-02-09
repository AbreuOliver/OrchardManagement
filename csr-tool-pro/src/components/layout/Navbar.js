import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="logo-area">
                <Link to="/" className="logo">CSR Tool Pro</Link>
            </div>
        </nav>
    )
}

export default Navbar;