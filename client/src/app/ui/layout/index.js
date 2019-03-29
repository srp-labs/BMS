import React from 'react';
import {
    withStyles, 
    withTheme,
    CssBaseline,
    Hidden,
} from '@material-ui/core';

import Navbar from './navbar';
import AppBar from './appbar';
import Main from './main';
import Footer from './footer';
import styles from './styles';

class Layout extends React.Component {    
    render() {
        const { 
            classes,
            children,
        } = this.props;

        return (
            <div className={classes.root}>
                
                <CssBaseline />
                
                <Hidden xlDown>
                    <Navbar className={classes.navbar} />
                </Hidden>

                <div className={classes.content}>
                    <AppBar className={classes.appbar} />

                    <Main className={classes.main}>
                        {children}
                    </Main>

                    <Footer className={classes.footer} />
                </div>
            </div>
        )
    }
}

export default withTheme()(withStyles(styles)(Layout));