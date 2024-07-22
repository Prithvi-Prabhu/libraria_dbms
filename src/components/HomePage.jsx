import React from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure this CSS file exists and is correctly linked

// Import images
import book10 from '../assets/images/book10.jpg';
import book11 from '../assets/images/book11.jpg';
import book12 from '../assets/images/book12.jpg';
import book13 from '../assets/images/book13.jpg';
import book14 from '../assets/images/book14.jpg';
import book15 from '../assets/images/book15.jpg';
import book16 from '../assets/images/book16.jpg';
import book17 from '../assets/images/book17.jpg';

const books = [
    { id: 1, src: book10 },
    { id: 2, src: book11 },
    { id: 3, src: book12 },
    { id: 4, src: book13 },
    { id: 5, src: book14 },
    { id: 6, src: book15 },
    { id: 7, src: book16 },
    { id: 8, src: book17 }
];

const HomePage = () => {
    return (
        <div className="home-page">
            <Menu profilePic="path_to_profile_pic" /> {/* Update profilePic path as needed */}
            <Sidebar />
            <div className="home-content">
                <div className="choose-type">
                    <h1 className="choose-type-text">Choose type of user</h1>
                    <div className="button-group">
                        <Link to="/bookseller" className="btn">Bookseller</Link>
                        <Link to="/customer" className="btn">Customer</Link>
                        <Link to="/supplier" className="btn">Supplier</Link>
                    </div>
                </div>
                <div className="bestsellers-section">
                    <h2 className="bestsellers-title">Bestsellers</h2>
                    <div className="books-gallery">
                        {books.map(book => (
                            <Link key={book.id} to={`/individualbook/${book.id}`}>
                                <img src={book.src} alt={`Book ${book.id}`} className="book-img" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
