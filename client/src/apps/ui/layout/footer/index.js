import React from 'react';
import classnames from 'classnames';
import {
    withStyles,
} from '@material-ui/core';
import styles from './styles';

const Footer = ({ className, classes, ...props }) => {
    return (
        <div 
            className={classnames(classes.root, className)}
            {...props}
        >
            This is the footer.
        </div>
    )
}

export default withStyles(styles)(Footer);