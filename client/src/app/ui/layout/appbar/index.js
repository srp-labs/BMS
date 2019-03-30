import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import {
    withStyles,
    AppBar,
    Toolbar,
    Hidden,
    Typography,
    IconButton,
} from '@material-ui/core';

import {
    Menu,
    Person,
} from '@material-ui/icons';

import AppLink from './link';
import styles from './styles';

const Appbar = ({ className, classes, ...props }) => {
    return (
        <AppBar 
            className={classnames(classes.root, className)}
            {...props}
        >
            <Toolbar className={classes.toolbar}>
                <Hidden xlDown>
                    <Menu color="primary" />    
                </Hidden>
                <div className={classes.linksContainer}>
                    <AppLink to="/home" label="Home" />
                    <AppLink to="/articles" label="Articles" />
                    <AppLink to="/about" label="About Us" />
                    <AppLink to="/progres" label="Progress" />
                </div>
                
                <Link to="/login">
                    <IconButton onClick={() => {}}>
                        <Person className={classes.icon} />    
                    </IconButton>
                </Link>
            
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Appbar);