import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Menu from './Menu';
import Sidebar from './Sidebar';
import './IndividualBook.css'; // Ensure this CSS file exists and is correctly linked

const IndividualBook = () => {
    // Sample data
    const book = {
        title: 'Sample Book Title',
        author: 'Sample Author', // Example author name
        summary: 'Sample Book Summary',
        isbn: '123456789',
        genre: 'Sample Genre',
        shelf: 'Sample Shelf',
        language: 'English',
        pages: '100',
        publisher: 'Sample Publisher',
        coverImage: 'path_to_sample_book_cover_image.jpg' // Placeholder path
    };

    // Assuming author's name is used as a unique identifier, adjust as necessary
    const authorId = book.author.replace(/\s+/g, '-').toLowerCase(); // Example transformation

    return (
        <div className="individualbook-wrapper">
            <Menu profilePic="path_to_profile_pic" /> {/* Update profilePic path as needed */}
            <Sidebar />
            <div className="individualbook-content">
                <img src={book.coverImage} alt="Book Cover" className="book-cover" />
                <div className="book-details">
                    <p className="book-title"><strong>TITLE:</strong> {book.title}</p>
                    <p className="book-author">
                        <strong>AUTHOR:</strong> <Link to={`/individualauthor/${authorId}`}>{book.author}</Link>
                    </p>
                    <p className="book-summary"><strong>SUMMARY:</strong> {book.summary}</p>
                    <br />
                    <br />
                    
                    <div className="book-additional-info">
                        <p className="book-info"><strong>Details:</strong></p>
                        <ul>
                            <li><strong>ISBN:</strong> {book.isbn}</li>
                            <li><strong>Genre:</strong> {book.genre}</li>
                            <li><strong>Shelf:</strong> {book.shelf}</li>
                            <li><strong>Language:</strong> {book.language}</li>
                            <li><strong>Pages:</strong> {book.pages}</li>
                            <li><strong>Publisher:</strong> {book.publisher}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualBook;
