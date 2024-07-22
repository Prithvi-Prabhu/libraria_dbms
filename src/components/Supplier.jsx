import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Menu from './Menu';
import Sidebar from './Sidebar';
import './Supplier.css'; // Ensure this CSS file exists and is correctly linked

const Supplier = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleViewBooksClick = () => {
        navigate('/view-books'); // Navigate to the View Books page
    };

    const handleViewStoresClick = () => {
        navigate('/view-stores'); // Navigate to the View Stores page
    };

    const handleViewOrdersClick = () => {
        navigate('/view-orders'); // Navigate to the View Orders page
    };

    return (
        <div className="supplier-wrapper">
            <div className="supplier-page">
                <Menu profilePic="path_to_profile_pic" /> {/* Update profilePic path as needed */}
                <Sidebar /> {/* Sidebar component */}
                <div className="supplier-content">
                    <h1 className="supplier-title">Supplier</h1>
                    <p className="supplier-welcome">Welcome, user!</p>
                    
                    <div className="supplier-fields">
                        <div className="supplier-field">
                            <label htmlFor="track-order">Track order by entering ID:</label>
                            <div className="supplier-field-container">
                                <input type="text" id="track-order" className="supplier-input" />
                                <button className="supplier-btn-enter">Enter</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="supplier-buttons">
                        <button className="supplier-btn-view" onClick={handleViewBooksClick}>View books</button>
                        <button className="supplier-btn-view" onClick={handleViewStoresClick}>View stores</button>
                        <button className="supplier-btn-view" onClick={handleViewOrdersClick}>View orders</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supplier;
