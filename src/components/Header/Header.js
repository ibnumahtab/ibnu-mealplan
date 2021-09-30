import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div id="header">
            <img className="pt-3" src={logo} alt="Ibnu Meal Plan Logo" />
            <hr />
        </div>
    );
};

export default Header;