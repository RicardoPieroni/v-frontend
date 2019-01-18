import React from 'react';
import ContantUser from './content-user';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => (
        <header>
                <div className="grid-container grid-parent header-container">
                        <div className="application-name-header grid-70">
                                <Link to="/" >
                                        Venturus Sports
                                </Link>
                        </div>
                        <ContantUser />
                </div>
        </header>
        
);

export default Header;