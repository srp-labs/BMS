import React from 'react';
import {
    withStyles, 
    withTheme,
    Hidden,
} from '@material-ui/core';

import Navbar from './navbar';
import AppBar from './appbar';
import Main from './main';
import Footer from './footer';
import styles from './styles';

class Layout extends React.Component {
    state = {
        navbar: false,
    };

    toggleNavbar = (nextState = !this.state.navbar) => {
        this.setState({
            navbar: nextState,
        });
    }
    
    render() {
        const { 
            classes,
            theme,
            children,
        } = this.props;

        return (
            <div className={classes.root}>
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