import React from 'react';
import Menu from './Menu';
import './AboutUs.css'; // Ensure this CSS file exists and is correctly linked
import abt1 from '../assets/images/abt1.jpg';
import abt2 from '../assets/images/abt2.jpg';
import abt3 from '../assets/images/abt3.jpg';
import abt4 from '../assets/images/abt4.jpg';
import mailIcon from '../assets/images/mail.png'; // Update the path as needed
import phoneIcon from '../assets/images/phone.png'; // Update the path as needed

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <Menu profilePic="path_to_profile_pic" /> {/* Update profilePic path as needed */}
            <div className="abtus-wrapper">
            <div className='abtus-content'>
                <div className="left-images">
                     <img src={abt1} alt="About Us 1" className="abt-img" />
                     <img src={abt4} alt="About Us 4" className="abt-img" />
                </div>
                <div className="abt-text">
                <br></br>
                <br></br>
                <h1 className="about-us-title">ABOUT US</h1>
                <br></br>
                <br></br>
                <p className="about-us-text">
                    LIBRARIA is a book inventory management software and look-up database.
                    <br></br>
                <br></br>
                    It streamlined the process of ordering, supplying and managing books.
                    <br></br>
                <br></br>
                    Versatile and efficient, LIBRARIA is the perfect solution for your management needs.
                    <br></br>
                <br></br>
                </p>
                <hr className="divider" />
                <br></br>
                <br></br>
                <div className="contact-us">
                    <div className="contact-info">
                        <img src={mailIcon} alt="Mail Icon" className="contact-icon" />
                        <span>librariabangalore@gmail.com</span>
                    </div>
                    <div className="contact-info">
                        <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
                        <span>+91 9611272227</span>
                    </div>
                </div>
            </div>
                <div className="right-images">
                    <img src={abt2} alt="About Us 2" className="abt-img" />
                    <img src={abt3} alt="About Us 3" className="abt-img" />
                </div>
                </div>
           
        </div>
        </div>
    );
};

export default AboutUs;
