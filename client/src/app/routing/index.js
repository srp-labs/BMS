import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import Home from '../pages/home';
import Articles from '../pages/articles';
import About from '../pages/about';
import Login from '../pages/login';

export default () => (
    <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/articles" component={Articles.List} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route render={() => <Redirect to="/home" />} />
    </Switch>
);