import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import menulogo from '../assets/images/logo.png'; // Ensure this path is correct
import './Menu.css';

const Menu = ({ profilePic }) => {
    const location = useLocation();
    
    return (
        <div className="menu-bar">
            <img src={menulogo} alt="Logo" className="menulogo" />
            <Link to="/home" className={`menu-item ${location.pathname === '/home' ? 'active' : ''}`}>Home</Link>
            <Link to="/profile" className={`menu-item ${location.pathname === '/profile' ? 'active' : ''}`}>Profile</Link>
            <Link to="/about" className={`menu-item ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            <input type="text" className="menu-search" placeholder="Search books..." />
            <div className="menu-profile-pic-container">
                <img src={profilePic} alt="" className="menu-profile-pic" />
            </div>
        </div>
    );
};

export default Menu;
