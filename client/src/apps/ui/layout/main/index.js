import React from 'react';
import classnames from 'classnames';
import {
    withStyles,
} from '@material-ui/core';
import styles from './styles';

const Main = ({ className, classes, ...props }) => {
    return (
        <div 
            className={classnames(classes.root, className)}
            {...props}
        >
            This is the main content.
        </div>
    )
}

export default withStyles(styles)(Main);