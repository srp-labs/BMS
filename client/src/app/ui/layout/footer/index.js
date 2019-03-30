import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
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

            <Typography className={classes.text}>
                <Link className={classes.link} to="">Facebook</Link>
                <Link className={classes.link} to="">Github</Link>
                <span className={classes.link}>Mail us at contact.reactdj@gmail.com</span>
            </Typography>
        </div>
    )
}

export default withStyles(styles)(Footer);