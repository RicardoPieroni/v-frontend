import React from 'react';
import ContantUser from './content-user';
import './header.css'


const Header = () => (
        <header>
                <div className="grid-container grid-parent header-container">
                        <div className="application-name-header grid-70">
                                <label>Venturus Sports</label>
                        </div>
                        <ContantUser />
                </div>
        </header>
        
);

export default Header;