import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import './content-user.css';

class ContentUser extends Component {

    constructor(props) {
        super(props);
        this.toggleOptions = this._toggleOptions.bind(this);
    }

    _toggleOptions() {
        $('#toggle-options').toggleClass('arrow-up-options');
        $('.box-options').slideToggle('active');
    }

    render() {
        return(
            <div className="grid-30 content-user">
                <div className="grid-100">
                    <label className="user-title" onClick={this.toggleOptions}>User test1
                            <span id="toggle-options" className="arrow-down-options" />
                    </label>
                </div>
                <div className="grid-100 grid-parent box-options">
                    <ul className="list-box-options">
                        <li>
                            <Link to="/" className="link-box-options">
                                Friends List
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="link-box-options">
                                Saved Itens
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="link-box-options">
                                Notifications
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="link-box-options">
                                User References
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="link-box-options">
                                Log out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContentUser;