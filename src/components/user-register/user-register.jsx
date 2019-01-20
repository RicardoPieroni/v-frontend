import React, { Component } from 'react';
import TabHeader from './tab-header';
import serviceHandle from '../../services/service-handle';


import './user-register.css';

class UserRegister extends Component {

    constructor() {
        super();
        this.onSaveClicked = this._onSaveClicked.bind(this);
        this.onDiscardClicked = this._onDiscardClicked.bind(this);
        this.service = serviceHandle.retrieveService();

        this.state = {
            username: '',
            name: '',
            city: '',
            email: '',
            daysWeek: [],
            rideInGroup: '',
            userId: undefined,
        };
    }

    componentWillMount() {
        const { userId } = this.props.match.params;
        if (userId) {
            this.service.retrieveUserById(userId)
            .then((result) => {
                this.setState({
                    userId,
                    username: result.username,
                    name: result.name,
                    city: result.city,
                    email: result.email,
                    rideInGroup: result.rideInGroup,
                    daysWeek: result.daysWeek,
                });
            })
            
        }
    }

    _onSaveClicked(e) {
        e.preventDefault();

        const { name, username, email, city, rideInGroup, daysWeek } = this.state;

        if (name && username && email && !this.state.userId) {
            return this.service.createUser({
                name,
                email,
                username,
                daysWeek,
                rideInGroup,
                city,
            })
            .then(() => {
                this.setState({
                    name: '',
                    email: '',
                    username: '',
                    daysWeek: [],
                    rideInGroup: '',
                    city:'',
                    userId: undefined,
                });
            }); 
        } else if (name && username && email){
            return this.service.updateUser({
                name,
                email,
                username,
                daysWeek,
                rideInGroup,
                city,
                _id: this.state.userId,
            })
            .then(() => this.service.retrieveUserById(this.state.userId))
            .then((result) =>
                this.setState({
                    username: result.username,
                    name: result.name,
                    city: result.city,
                    email: result.email,
                    rideInGroup: result.rideInGroup,
                    daysWeek: result.daysWeek,
            }));
        }
    }

    _onDiscardClicked() {

    }

    _onUsernameChanged() {
        const newValue = this.usernameField.value;
        this.setState({ username: newValue });
    }

    _onNameChanged() {
        const newValue = this.nameField.value;
        this.setState({ name: newValue });
    }

    _onCityChanged() {
        const newValue = this.cityField.value;
        this.setState({ city: newValue });
    }

    _onEmailChanged() {
        const newValue = this.emailField.value;
        this.setState({ email: newValue });
    }

    _onRideInGroupChanged(e) {
        this.setState({
          rideInGroup: e.target.value
        });
    }

    _onDayWeekChanged(e) {
        const checked = e.target.checked;
        const nameField = e.target.name;
        
        if (!checked) {
           
            this.setState( state => {
                const daysWeek = state.daysWeek.filter((item) => item !== nameField);
                return {
                    daysWeek,
                };
              });
        }
        else {
            const daysWeek = this.state.daysWeek;
            daysWeek.push(nameField);
            this.setState({ daysWeek });
        }

    }
      

    render() {
        return(
            <div className="grid-container grid-parent grid-100 user-register-container">
                <TabHeader/>
                <form className="form-user-register">
                    <div className="grid-100">
                        <div className="grid-50">
                            <div className="container grid-100">
                                <label >Username</label>
                                <input type="text"
                                    placeholder="Enter Username"
                                    name="username"
                                    value={this.state.username} id="username"
                                    ref={c => this.usernameField = c} 
                                    onChange={() => this._onUsernameChanged()}
                                />
                            </div>
                            <div className="container grid-100">
                                <label >Name</label>
                                <input type="text" placeholder="Enter Name"
                                name="name"
                                    value={this.state.name} id="name" 
                                    ref={c => this.nameField = c}
                                    onChange={() => this._onNameChanged()}
                                />
                            </div>
                            <div className="container grid-100">
                                <label >E-mail</label>
                                <input type="email" placeholder="Enter e-mail"
                                name="email"
                                    value={this.state.email} id="email"
                                    ref={c => this.emailField = c}
                                    onChange={() => this._onEmailChanged()}
                                />
                            </div>
                            <div className="grid-50">
                                <button className="btn"onClick={this.onSaveClicked} > 
                                    <i className="fas fa-save"></i> Save 
                                </button>
                            </div>
                            <div className="grid-50">
                                <button className="btn-discard" onClick={this.onDiscardClicked}> 
                                    <i className="fas fa-ban"></i> Discard 
                                </button>
                            </div>
                        </div>
                        <div className="grid-50">
                            <div className="container grid-100">
                                <label >City</label>
                                <input type="text" placeholder="Enter City"
                                name="city"
                                value={this.state.city} id="city"
                                ref={c => this.cityField = c}
                                onChange={() => this._onCityChanged()}
                                />
                            </div>
                        </div>
                        <div className="grid-50">
                            <div className="container grid-100">
                                <label >Ride in group</label>
                            </div>
                            <div className="grid-30">
                                <input type="radio"
                                    id="ride" name="ride"
                                    value="always"
                                    checked={this.state.rideInGroup === "always"}
                                    onChange={(e) => this._onRideInGroupChanged(e)}
                                />
                                <label >Always</label>   
                            </div>
                            <div className="grid-30">
                                <input type="radio"
                                    id="ride" name="ride" value="sometimes"
                                    checked={this.state.rideInGroup === "sometimes"}
                                    onChange={(e) => this._onRideInGroupChanged(e)}
                                />
                                <label >Sometimes</label>   
                            </div>
                            <div className="grid-30">
                                <input type="radio" id="ride" name="ride" value="never"
                                    checked={this.state.rideInGroup === "never"}
                                    onChange={(e) => this._onRideInGroupChanged(e)}
                                />
                                <label >Never</label>   
                            </div>
                        </div>
                        <div className="grid-50 day-week-container">
                            <div className="container grid-100">
                                <label >Days on the week</label>
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="sunday" value="sunday"
                                checked={this.state.daysWeek.find((item) => item === 'sunday') === 'sunday'}
                                onChange={(e) => this._onDayWeekChanged(e)}
                                />
                                <label >Sun</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="monday" value="monday"
                                    checked={this.state.daysWeek.find((item) => item === 'monday') === 'monday'}
                                    onChange={(e) => this._onDayWeekChanged(e)}
                                />
                                <label >Mon</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="tuesday" value="tuesday"
                                checked={this.state.daysWeek.find((item) => item === 'tuesday') === 'tuesday'}
                                    onChange={(e) => this._onDayWeekChanged(e)}
                                />
                                <label >Tue</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="wednesday" value="wednesday"
                                checked={this.state.daysWeek.find((item) => item === 'wednesday') === 'wednesday'}
                                 onChange={(e) => this._onDayWeekChanged(e)}/>
                                <label >Wed</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="thursday" value="thursday" 
                                checked={this.state.daysWeek.find((item) => item === 'thursday') === 'thursday'}
                                    onChange={(e) => this._onDayWeekChanged(e)}
                                />
                                <label >Thu</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="friday" value="friday"
                                checked={this.state.daysWeek.find((item) => item === 'friday') === 'friday'}
                                onChange={(e) => this._onDayWeekChanged(e)} />
                                <label >Fri</label>   
                            </div>
                            <div className="grid-15">
                                <input type="checkbox" name="saturday" value="saturday"
                                checked={this.state.daysWeek.find((item) => item === 'saturday') === 'saturday'}
                                onChange={(e) => this._onDayWeekChanged(e)}/>
                                <label >Sat</label>   
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserRegister;