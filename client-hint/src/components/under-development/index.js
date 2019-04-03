import React from 'react';
import { 
    withStyles, Typography,
} from '@material-ui/core';

import styles from './styles';

// import Image from '../../../assets/images/under-construction.svg';

const UnderDevelopment = ({ classes, ...props }) => {
    return (
        <div className={classes.root} {...props}>
            <img src={'/static/images/under-construction.svg'} className={classes.image} />
            <Typography className={classes.text}>Redirecting to Support...</Typography>
        </div>
    )
}

export default withStyles(styles)(UnderDevelopment);