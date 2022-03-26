import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header-area'>
            <div className="header-container">
                <div className="brand-logo">
                    <h2 className=''>Envivix Laptop</h2>
                </div>
                <ul className="menu d-flex">
                    <li className='px-3'><a href="/home">Home</a></li>
                    <li className='px-3'><a href="/laptops">Laptops</a></li>
                    <li className='px-3'><a href="/brands">Accesories</a></li>
                    <li className='px-3'><a href="/about">About</a></li>
                    <li className='px-3'><a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                </ul>
            </div>            
        </div>
    );
};

export default Header;