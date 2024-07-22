import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Menu from './Menu';
import Sidebar from './Sidebar';
import './Customer.css'; // Ensure this CSS file exists and is correctly linked

const Customer = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleViewBooksClick = () => {
        navigate('/view-books'); // Navigate to the View Books page
    };

    const handleViewStoresClick = () => {
        navigate('/view-stores'); // Navigate to the View Stores page
    };

    return (
        <div className="customer-wrapper">
            <div className="customer-page">
                <Menu profilePic="path_to_profile_pic" /> {/* Update profilePic path as needed */}
                <Sidebar /> {/* Sidebar component */}
                <div className="customer-content">
                    <h1 className="customer-title">Customer</h1>
                    <p className="customer-welcome">Welcome, user!</p>
                    
                    <div className="customer-fields">
                        <div className="customer-field">
                            <label htmlFor="book-name">Book name:</label>
                            <div className="customer-field-container">
                                <input type="text" id="book-name" className="customer-input" />
                                <button className="customer-btn-enter">Enter</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="customer-buttons">
                        <button className="customer-btn-view" onClick={handleViewBooksClick}>View books</button>
                        <button className="customer-btn-view" onClick={handleViewStoresClick}>View stores</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
