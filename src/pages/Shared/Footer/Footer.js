import React from 'react';

const Footer = () => {
    return (
        <footer className='py-5 mt-5 ' style={{ backgroundColor: "#1E0A3C" }}>

            <div className="container">
                <h3 className='fs-5 text-center mb-0 text-white'>&copy; {new Date().getUTCFullYear()} Thepostman24 || All Rights Reserved </h3>
            </div>

        </footer>
    );
};

export default Footer;