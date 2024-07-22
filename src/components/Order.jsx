import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Menu from './Menu';
import Sidebar from './Sidebar';
import './Order.css'; // Ensure this CSS file exists and is correctly linked

const Order = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleOrderClick = () => {
        navigate('/confirm-order'); // Navigate to the Confirm Order page
    };

    return (
        <div className="order-wrapper">
            <div className="order-page">
                <Menu profilePic="path_to_profile_pic" /> {/* Update profilePic path as needed */}
                <Sidebar /> {/* Sidebar component */}
                <div className="order-content">
                    <h1 className="order-title">Order</h1>
                    <p className="order-welcome">Welcome, user!</p>
                    
                    <div className="order-fields">
                        <div className="order-field-row">
                            <div className="order-field">
                                <label htmlFor="book-name">Book name:</label>
                                <input type="text" id="book-name" className="order-input" />
                            </div>
                            <div className="order-field">
                                <label htmlFor="qty" className="qty-label">Qty:</label>
                                <input type="text" id="qty" className="order-qty-input" />
                            </div>
                        </div>
                        <div className="order-field-row">
                            <div className="order-field">
                                <label htmlFor="supplier">Supplier:</label>
                                <input type="text" id="supplier" className="order-input" />
                            </div>
                            <div className="order-field">
                                <label htmlFor="bookstore" className="bookstore-label">Bookstore:</label>
                                <input type="text" id="bookstore" className="order-input" />
                            </div>
                        </div>
                        <div className="order-field">
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" className="order-address-input" />
                        </div>
                    </div>
                    
                    <div className="order-buttons">
                        <button className="order-btn-show">Show details</button>
                        <button className="order-btn-order" onClick={handleOrderClick}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
