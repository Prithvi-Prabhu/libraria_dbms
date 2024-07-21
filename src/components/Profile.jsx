import React from 'react';
import { Link } from 'react-router-dom';
import prof from '../assets/images/logo.png'; // Update the path as needed
import mailIcon from '../assets/images/mail.png'; // Update the path as needed
import phoneIcon from '../assets/images/phone.png'; // Update the path as needed
import './Profile.css'; // Ensure this CSS file exists and is correctly linked

const Profile = ({ userId, profilePic }) => {
    return (
        <div className="profile-page">
            <div className="sidebar">
                <div className="logo-section">
                    <img src={prof} alt="Logo" className="prof" />
                    <h1 className="title-prof">LIBRARIA</h1>
                    <p className="tag-prof">A world of wonder at your fingertips</p>
                </div>
                <div className="menu-section">
                    <Link to="/" className="menu-item">LOGOUT</Link>
                    <Link to="/home" className="menu-item">HOME</Link>
                    <Link to="/about" className="menu-item">ABOUT US</Link>
                    <hr />
                    <p className="contact-us">CONTACT US</p>
                    <div className="contact-info">
                        <img src={mailIcon} alt="Mail Icon" className="contact-icon" />
                        <span>librariabangalore@gmail.com</span>
                    </div>
                    <div className="contact-info">
                        <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
                        <span>+91 9611272227</span>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <h1 className="edit-profile-title">Edit Profile</h1>
                <p className="user-id">USER ID: {userId}</p>
                <div className="profile-pic-container">
                    <img src={profilePic} alt="" className="profile-pic" />
                    <p className="change-profile-pic">Change profile picture</p>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="input-field username-field" />
                </div>
                <div className="form-group">
                    <label htmlFor="user-type">User Type</label>
                    <select id="user-type" className="input-field user-type-field">
                        <option value="">Select</option>
                        <option value="bookseller">Bookseller</option>
                        <option value="supplier">Supplier</option>
                        <option value="customer">Customer</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" className="input-field" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" className="input-field" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" id="phone" className="input-field phone-field" />
                </div>
                <button className="edit-button">Edit</button>
                <button className="save-button">Save</button>
            </div>
        </div>
    );
};

export default Profile;
