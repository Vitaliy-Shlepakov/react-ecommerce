import React from 'react';
import './index.sass';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            {year} &copy; NOMAD Store
        </div>
    );
};

export default Footer;