import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <h2>Tools</h2>
            <Link to="/general-public" className="link">General Public</Link>
            <Link to="/medicaid" className="link">Medicaid</Link>
        </div>
    )
}

export default Sidebar;