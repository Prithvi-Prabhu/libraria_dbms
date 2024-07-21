import React from 'react';
import { Link } from 'react-router-dom';
import sign from '../assets/images/logo.png'; // Update the path as needed
import './LoginPage.css'; // Ensure this CSS file exists and is correctly linked

const LoginPage = () => {
    return (
        <div className="login-page">
            <img src={sign} alt="Logo" className="sign" />
            <h1 className="title-sign">LIBRARIA</h1>
            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" className="input-field" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="input-field" />
                </div>
                <button className="signup-button">Login</button>
                <Link to="/signup" className="login-link">New user? Sign up now</Link>
            </div>
        </div>
    );
};

export default LoginPage;
