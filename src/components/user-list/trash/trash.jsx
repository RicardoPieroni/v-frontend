import React, { Component } from 'react';
import './trash.css';

class Trash extends Component {
    
    constructor(props) {
        super(props);
        this.row = props.row;
    }

    onClicked() {
        if(this.props.onDeleteRow) {
            return this.props.onDeleteRow(this.props.row);
        }
    }

    render() {
        return(
            <div className="trash-container">
                <i onClick={this.onClicked.bind(this)} className="fas fa-trash"></i>
            </div>
        );
    }
}

export default Trash;