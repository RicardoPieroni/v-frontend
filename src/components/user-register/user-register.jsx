import React, { Component } from 'react';
import TabHeader from './tab-header';
import './user-register.css';

class UserRegister extends Component {
    render() {
        return(
            <div className="grid-container grid-parent grid-100 user-register-container">
                <TabHeader/>
                <form className="form-user-register">
                    <div className="grid-100">
                        <div className="grid-50">
                            <div class="container grid-100">
                                <label for="username">Username</label>
                                <input type="text" placeholder="Enter Username" name="username" required/>
                            </div>
                            <div class="container grid-100">
                                <label for="name">Name</label>
                                <input type="text" placeholder="Enter Name" name="name" required/>
                            </div>
                            <div class="container grid-100">
                                <label for="email">E-mail</label>
                                <input type="email" placeholder="Enter e-mail" name="email" required/>
                            </div>
                            <div className="grid-50">
                                <button className="btn" > 
                                    <i className="fas fa-save"></i> Save 
                                </button>
                            </div>
                            <div className="grid-50">
                                <button className="btn-discard" > 
                                    <i className="fas fa-ban"></i> Discard 
                                </button>
                            </div>
                        </div>
                        <div className="grid-50">
                            <div class="container grid-100">
                                <label for="city">City</label>
                                <input type="text" placeholder="Enter City" name="city" required/>
                            </div>
                        </div>
                        <div className="grid-50">
                            <div class="container grid-100">
                                <label for="ride">Ride in group</label>
                            </div>
                            <div className="grid-30">
                                <input type="radio" id="ride" name="ride" value="always"/>
                                <label for="ride">Always</label>   
                            </div>
                            <div className="grid-30">
                                <input type="radio" id="ride" name="ride" value="sometimes"/>
                                <label for="ride">Sometimes</label>   
                            </div>
                            <div className="grid-30">
                                <input type="radio" id="ride" name="ride" value="never"/>
                                <label for="ride">Never</label>   
                            </div>
                        </div>
                        <div className="grid-50 day-week-container">
                            <div class="container grid-100">
                                <label for="city">Days on the week</label>
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="sun" value="sun" />
                                <label for="sun">Sun</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="tue" value="tue" />
                                <label for="tue">Tue</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="wed" value="wed" />
                                <label for="wed">Wed</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="mon" value="mon" />
                                <label for="mon">Thu</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="mon" value="mon" />
                                <label for="mon">Fri</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="mon" value="mon" />
                                <label for="mon">Sat</label>   
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserRegister;