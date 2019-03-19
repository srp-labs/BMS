import React from 'react';
import classnames from 'classnames';
import {
    withStyles,
    AppBar,
    Toolbar,
    Hidden,
    Typography,
} from '@material-ui/core';

import {
    Menu,
} from '@material-ui/icons';

import styles from './styles';

const Appbar = ({ className, classes, ...props }) => {
    return (
        <AppBar 
            className={classnames(classes.root, className)}
            {...props}
        >
            <Toolbar>
                <Hidden smUp>
                    <Menu color="primary" />    
                </Hidden>
                <div className={classes.linksContainer}>
                    <Typography className={classes.link}>
                        H<small>ome</small>
                    </Typography>
                    <Typography className={classes.link}>
                        A<small>rticles</small>
                    </Typography>
                    <Typography className={classes.link}>
                        A<small>bout</small> U<small>s</small> 
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Appbar);