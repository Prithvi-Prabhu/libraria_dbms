import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Bookseller from './components/Bookseller';
import Order from './components/Order';
import Customer from './components/Customer';
import Supplier from './components/Supplier';
import IndividualBook from './components/IndividualBook'; // Import the IndividualBook component
import IndividualAuthor from './components/IndividualAuthor'; // Import IndividualAuthor component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/bookseller" element={<Bookseller />} />
                <Route path="/order" element={<Order />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/supplier" element={<Supplier />} />
                <Route path="/individualbook/:bookId" element={<IndividualBook />} /> {/* Existing route */}
                <Route path="/individualauthor/:authorId" element={<IndividualAuthor />} /> {/* New route */}
            </Routes>
        </Router>
    );
};

export default App;
