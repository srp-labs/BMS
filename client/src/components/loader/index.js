/**
 * Loader is a helper component. It's internally being used in other container components.
 */

import React from 'react';
import { withStyles, LinearProgress, Typography } from '@material-ui/core';
import styles from './styles';

export default withStyles(styles)(({ classes, ...props }) => 
    <div className={classes.loadingContainer}>
        <Typography variant="h6" className={classes.loadingMessage} color="secondary">Loading</Typography>
        <LinearProgress className={classes.loadingRoot} color="secondary"/>
    </div>
)
