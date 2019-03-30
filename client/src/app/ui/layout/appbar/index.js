import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import {
    withStyles,
    AppBar,
    Toolbar,
    Hidden,
    Typography,
    IconButton,
    Popper,
    Paper,
    Grow,
    ClickAwayListener,
    MenuList,
    MenuItem
} from '@material-ui/core';

import {
    Menu as MenuIcon,
    Person,
    Settings,
} from '@material-ui/icons';

import AppLink from './link';
import styles from './styles';

// import HeaderLogo from '../../../../../assets/images/header-logo.png';

class Appbar extends React.Component {
    state = {
        open: false,
    };
    
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };
    
    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
          return;
        }
    
        this.setState({ open: false });
    };

    render() {
        const { className, classes, ...props } = this.props;

        const { open } = this.state; 
        
        const isLoggedIn = Boolean(localStorage.getItem('login-data'));
        
        const username = isLoggedIn && JSON.parse(localStorage.getItem('login-data')).username;

        return (
            <AppBar 
                className={classnames(classes.root, className)}
                {...props}
            >
                <Toolbar className={classes.toolbar}>
                    <Hidden smDown>
                        <img src={'/static/images/header-logo.png'} style={{ height: 56 }} />    
                    </Hidden>
                    <div className={classes.linksContainer}>
                        <AppLink to="/home" label="Home" />
                        <AppLink to="/articles" label="Articles" />
                        <AppLink to="/opportunities" label="Opportunities" />
                        <AppLink to="/support" label="Support" />
                        <AppLink to="/about" label="About Us" />
                    </div>
                    
                    {
                        isLoggedIn ?
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '1em' }}>
                            <Typography style={{ fontSize: '1em' }}>Hi, {username.charAt(0).toUpperCase() + username.slice(1)} </Typography>
                            <IconButton buttonRef={node => this.anchorEl = node} onClick={this.handleToggle}>
                                <Settings className={classes.icon} />    
                            </IconButton>
                            
                            <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        id="menu-list-grow"
                                        style={{ 
                                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                            position: 'absolute',
                                            top: 16,
                                            left: -104,
                                        }} >
                                        <Paper className={classes.menuRoot}>
                                            <ClickAwayListener onClickAway={this.handleClose}>
                                            <MenuList>
                                                <MenuItem onClick={this.handleClose}>
                                                    <AppLink to="/profile" label="Profile" />
                                                </MenuItem>
                                                <MenuItem onClick={this.handleClose}>
                                                    <AppLink to="/logout" label="Logout" />
                                                </MenuItem>
                                            </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div> :
                        <Link to="/login">
                            <IconButton>
                                <Person className={classes.icon} />    
                            </IconButton>
                        </Link> 
                    }                
            
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Appbar);