import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Menu from './Menu';
import Sidebar from './Sidebar';
import './Bookseller.css'; // Ensure this CSS file exists and is correctly linked

const Bookseller = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handlePlaceOrderClick = () => {
        navigate('/order'); // Navigate to the Order page
    };

    return (
        <div className="bookseller-wrapper">
            <div className="bookseller-page">
                <Menu profilePic="path_to_profile_pic" /> {/* Update profilePic path as needed */}
                <Sidebar /> {/* Sidebar component */}
                <div className="bs-content">
                    <h1 className="bs-title">Bookseller</h1>
                    <p className="bs-welcome">Welcome, user!</p>
                    
                    <div className="bs-fields">
                        <div className="bs-field">
                            <label htmlFor="check-availability">Check availability of book in store:</label>
                            <div className="bs-field-container">
                                <input type="text" id="check-availability" className="bs-input" />
                                <button className="bs-btn-enter">Enter</button>
                            </div>
                        </div>
                        
                        <div className="bs-field">
                            <label htmlFor="check-orders">Check current orders:</label>
                            <div className="bs-field-container">
                                <input type="text" id="check-orders" className="bs-input" />
                                <button className="bs-btn-enter">Enter</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bs-buttons">
                        <button className="bs-btn-view">View books</button>
                        <button className="bs-btn-view">View stores</button>
                        <button className="bs-btn-order" onClick={handlePlaceOrderClick}>Place an order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookseller;
