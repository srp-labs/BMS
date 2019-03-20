import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import Home from '../home';
import Articles from '../articles';
import About from '../about';

export default () => (
    <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/articles" component={Articles.List} />
        <Route exact path="/about" component={About} />
        <Route render={() => <Redirect to="/home" />} />
    </Switch>
);