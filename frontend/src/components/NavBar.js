import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="nav-bar">
            <button class="burger-menu" onclick={toggleMenu}>☰</button>
            <ul className={menuActive ? 'active' : ''}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/upload">Upload Image</Link></li>
                {isLoggedIn ? (
                    <li><Link to="/logout">Logout</Link></li>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
