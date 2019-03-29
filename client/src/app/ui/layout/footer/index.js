import React from 'react';
import classnames from 'classnames';
import {
    withStyles,
    Typography,
} from '@material-ui/core';
import styles from './styles';

const Footer = ({ className, classes, ...props }) => {
    return (
        <div 
            className={classnames(classes.root, className)}
            {...props}
        >
            <Typography className={classes.text}>
                Code snippets licensed under MIT, unless otherwise noted. 
            </Typography>
            <Typography className={classes.text}>
                Content & Graphics © 2019 SRP Labs
            </Typography>
        </div>
    )
}

export default withStyles(styles)(Footer);