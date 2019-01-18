import React, { Component } from 'react';

class TabHeader extends Component {

    render() {
        return(
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
        );
    }
}

export default TabHeader;