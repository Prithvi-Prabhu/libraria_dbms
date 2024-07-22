import React from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import './IndividualAuthor.css'; // Ensure this CSS file exists and is correctly linked

const IndividualAuthor = () => {
    // Sample data
    const author = {
        name: '',
        about: '',
        profileImage: 'path_to_author_image.jpg', // Placeholder path
        books: [
            'path_to_book_cover1.jpg',
            'path_to_book_cover2.jpg',
            'path_to_book_cover3.jpg'
        ]
    };

    return (
        <div className="individualauthor-wrapper">
            <Menu profilePic="path_to_profile_pic" /> {/* Update profilePic path as needed */}
            <Sidebar />
            <div className="individualauthor-content">
                <div className="author-section">
                    <img src={author.profileImage} alt="" className="author-image" />
                    <div className="author-details">
                        <p className="author-name"><strong>AUTHOR:</strong> {author.name}</p>
                        <p className="author-about"><strong>ABOUT THE AUTHOR:</strong> {author.about}</p>
                    </div>
                </div>
                <div className="more-from-author">
                    <p className="more-from-title">More from the author</p>
                    <div className="book-images-grid">
                        {author.books.map((book, index) => (
                            <img key={index} src={book} alt={` ${index + 1}`} className="book-thumbnail" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualAuthor;
