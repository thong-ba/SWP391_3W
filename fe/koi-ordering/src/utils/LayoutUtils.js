import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LayoutUtils = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default LayoutUtils;
