import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import AboutUs from '../Components/Pages/AboutUs';
import ContactUs from '../Components/Pages/ContactUs';
import Services from '../Components/Pages/Services';







function MyRoute() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    );
}

export default MyRoute;

