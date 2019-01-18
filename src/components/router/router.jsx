import React from 'react';
import Header from '../header';
import Home from '../home';
import UserList from '../user-list';
import UserRegister from '../user-register';
import './../../assets/unsemantic/assets/stylesheets/unsemantic-grid-responsive.css';
import './../../assets/style.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Header />        
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/users' component={UserList}/>
                <Route exact path='/users/new' component={UserRegister}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;
