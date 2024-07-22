import React from 'react';
import { Link } from 'react-router-dom';
import mailIcon from '../assets/images/mail.png'; // Update the path as needed
import phoneIcon from '../assets/images/phone.png'; // Update the path as needed
import './Sidebar.css'; // Ensure this CSS file exists and is correctly linked

const Sidebar = () => {
    return (
        <div className="sd-sidebar">
            <div className="sd-menu-item">
            <h1 className="title-prof">LIBRARIA</h1>
            <p className="tag-prof">A world of wonder at your fingertips</p>
            <br></br>
                <Link to="/" className="sd-logout">LOGOUT</Link>
            </div>
            <hr className="sd-divider" />
            <p className="sd-contact-us">CONTACT US</p>
            <div className="sd-contact-info">
                <img src={mailIcon} alt="Mail Icon" className="sd-contact-icon" />
                <span>librariabangalore@gmail.com</span>
            </div>
            <div className="sd-contact-info">
                <img src={phoneIcon} alt="Phone Icon" className="sd-contact-icon" />
                <span>+91 9611272227</span>
            </div>
        </div>
    );
};

export default Sidebar;
