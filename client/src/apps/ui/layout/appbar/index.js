import React from 'react';
import classnames from 'classnames';
import {
    withStyles,
    Toolbar,
} from '@material-ui/core';
import styles from './styles';

const AppBar = ({ className, classes, ...props }) => {
    return (
        <div 
            className={classnames(classes.root, className)}
            {...props}
        >
            <Toolbar>
                This is the toolbar
            </Toolbar>
        </div>
    )
}

export default withStyles(styles)(AppBar);