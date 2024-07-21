import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sign from '../assets/images/logo.png'; // Update the path as needed
import './SignupPage.css'; // Ensure this CSS file exists and is correctly linked

const SignupPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any validation or form submission logic here

        // Redirect to the Profile page
        navigate('/profile');
    };

    return (
        <div className="signup-page">
            <img src={sign} alt="Logo" className="sign" />
            <h1 className="title-sign">LIBRARIA</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" className="input-field" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="input-field" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="input-field" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-confirmation">Password confirmation</label>
                        <input type="password" id="password-confirmation" className="input-field" />
                    </div>
                    <button type="submit" className="signup-button">Sign up</button>
                </form>
                <Link to="/login" className="login-link">Already registered? Login</Link>
            </div>
        </div>
    );
};

export default SignupPage;
