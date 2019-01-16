import React, { Component } from 'react';
import UserList from '../user-list';
import './home.css';

class Home extends Component {
    render() {
        return (
            <main>
                <div className="grid-container grid-parent grid-100 home-container">
                    <div className="grid-100 icon-container">
                        <div className="grid-25">
                            <i className="fas fa-puzzle-piece fa-5x"></i>
                        </div>
                        <div className="grid-25">
                            <i className="fas fa-trophy fa-5x"></i>
                        </div>
                        <div className="grid-25">
                            <i className="fas fa-route fa-5x"></i>
                        </div>
                        <div className="grid-25">
                            <i className="fab fa-nutritionix fa-5x"></i>
                        </div>
                    </div>
                    <UserList />
                </div>
            </main>
        );
    }
}

export default Home;

