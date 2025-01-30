import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    }

    return (
        <nav className="nav-bar">
            <button className="burger-menu" onClick={toggleMenu}>☰</button>
            <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/upload" onClick={closeMenu}>Upload Image</Link></li>
                {isLoggedIn ? (
                    <li><Link to="/logout" onClick={closeMenu}>Logout</Link></li>
                ) : (
                    <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
                )}
                <li><Link to="/help" onClick={closeMenu}>Help</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
