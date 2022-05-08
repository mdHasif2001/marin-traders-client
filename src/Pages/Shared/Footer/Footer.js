import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center mt-5 bg-dark text-white p-5 mb-0 mx-0">
            <p>We trades Marine Products</p>
            <p></p>
            <p><small>copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;