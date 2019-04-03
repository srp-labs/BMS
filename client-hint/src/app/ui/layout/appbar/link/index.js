import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { 
    withStyles,
    Typography,
} from '@material-ui/core';
import styles from './styles';

const Link = ({ label, to, noUnderline, className, classes, ...props}) => {
    const formatter = (text, index) => {
        let firstLetter = text[0], remaining = text.slice(1);

        return <Typography key={index} className={classes.text}>
            <big>{firstLetter}</big>{remaining}
        </Typography>
    };

    let labelChild = label;
    if(typeof label === "string") {
        labelChild = label.split(' ').map(formatter);
    }

    return (
        <NavLink
            to={to}
            className={classnames(classes.root, noUnderline && classes.noUnderline, className)}
            {...props}
        >
            {labelChild}
        </NavLink>
    )
}

export default withStyles(styles)(Link);