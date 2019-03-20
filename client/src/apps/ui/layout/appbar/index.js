import React from 'react';
import classnames from 'classnames';
import {
    withStyles,
    AppBar,
    Toolbar,
    Hidden,
    Typography,
} from '@material-ui/core';

import {
    Menu,
    People,
} from '@material-ui/icons';

import Link from './link';
import styles from './styles';

const Appbar = ({ className, classes, ...props }) => {
    return (
        <AppBar 
            className={classnames(classes.root, className)}
            {...props}
        >
            <Toolbar>
                <Hidden xlDown>
                    <Menu color="primary" />    
                </Hidden>
                <div className={classes.linksContainer}>
                    <Link to="/home" label="Home" />
                    <Link to="/articles" label="Articles" />
                    <Link to="/about" label="About Us" />
                </div>
                <Hidden xlDown>
                    <People color="primary" />    
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Appbar);