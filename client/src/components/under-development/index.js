import React from 'react';
import { 
    withStyles,
} from '@material-ui/core';

import styles from './styles';

import Image from '../../../assets/images/under-construction.svg';

const UnderDevelopment = ({ classes, ...props }) => {
    return <img src={Image} style={{ height: '40vh', marginTop: '100px' }} />
}

export default withStyles(styles)(UnderDevelopment);