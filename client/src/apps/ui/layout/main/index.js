import React, { Children } from 'react';
import classnames from 'classnames';
import {
    withStyles,
} from '@material-ui/core';
import styles from './styles';

const Main = ({ children, className, classes, ...props }) => {
    return (
        <div 
            className={classnames(classes.root, className)}
            {...props}
        >
            {children}
        </div>
    )
}

export default withStyles(styles)(Main);