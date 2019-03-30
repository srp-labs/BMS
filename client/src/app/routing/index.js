import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import Home from '../pages/home';
import Articles from '../pages/articles';
import About from '../pages/about';
import Login from '../pages/login';
import Register from '../pages/register';
import User from '../pages/user';
import Opportunities from '../pages/opportunities';
import Donate from '../pages/donate';
import Support from '../pages/support';

export default () => (
    <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/articles" component={Articles.List} />
        <Route exact path="/opportunities" component={Opportunities} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={User} />
        <Route render={() => <Redirect to="/home" />} />
    </Switch>
);