import React from 'react';
import Header from '../header';
import Home from '../home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Header />        
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;
