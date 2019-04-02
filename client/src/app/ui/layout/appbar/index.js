import React from 'react';
import { withStyles, AppBar, Toolbar } from '@material-ui/core';

import styles from './styles';

export default withStyles(styles)(({ classes }) => 
    <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <div className={classes.siteLogo}>
                
            </div>
            <div className={classes.links}>

            </div>
            <div className={classes.loginRegister}>

            </div>
        </Toolbar>
    </AppBar>
);