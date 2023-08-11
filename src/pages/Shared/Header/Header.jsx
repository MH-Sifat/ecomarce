/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'
import logo from './../../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <img src={logo} alt="" />

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/order">order</Link></li>
                    <li><Link to="/review">Order Review</Link></li>
                    <li><Link to="/inventory">Manage Inventory</Link></li>
                    <li><Link to="/Login">Log In</Link></li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;