import React from 'react';
import { 
    withStyles, Typography,
} from '@material-ui/core';

import styles from './styles';

import Image from '../../../assets/images/under-construction.svg';

const UnderDevelopment = ({ classes, ...props }) => {
    return (
        <div className={classes.root} {...props}>
            <img src={Image} className={classes.image} />
            <Typography className={classes.text}>Working on it.!!</Typography>
        </div>
    )
}

export default withStyles(styles)(UnderDevelopment);