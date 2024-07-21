import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import image from '../assets/images/landing.png';
import './LandingPage.css'; // Ensure this CSS file exists and is correctly linked

const LandingPage = () => {
    return (
        <div className="landing-page">
            <img src={logo} alt="Logo" className="logo" />
            <div className="content">
                <div className="text-section">
                    <h1 className="title">LIBRARIA</h1>
                    <p className="tagline">A world of wonder at your fingertips</p>
                    <div className="button-container">
                        <Link to="/signup" className="btn sign-up">Sign up</Link>
                        <Link to="/login" className="btn login">Login</Link>
                    </div>
                </div>
                <div className="image-container">
                    <img src={image} alt="Books" className="landing" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
