import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
    render() {
        return (
            <main>
                <div className="grid-container grid-parent grid-100 home-container">
                    <div className="grid-100 icon-container">
                        <div className="grid-50">
                            <Link to="/users" className="link-users">
                                <i className="fas fa-users fa-5x" title="User list"></i>
                            </Link> 
                        </div>
                        <div className="grid-50">
                            <Link to="/users/new" className="link-users" title="New user">
                                <i className="fas fa-user-plus fa-5x"></i>
                            </Link> 
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;

