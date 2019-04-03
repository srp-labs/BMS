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
    MenuItem,
    Button,
    Divider
} from '@material-ui/core';

import {
    Menu as MenuIcon,
    Person,
    Settings,
} from '@material-ui/icons';

import AppLink from './link';
import styles from './styles';

import HeaderLogo from '../../../../../assets/images/header-logo.png';

class Appbar extends React.Component {
    state = {
        open: false,
        smallScreen: false,
    };
    
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleSmallScreen = () => {
        this.setState(state => ({ smallScreen: !state.smallScreen }));
    }
    
    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
          return;
        }
    
        this.setState({ open: false });
    };

    handleCloseSmallScreen = event => {
        if (this.anchorElSmallScreen.contains(event.target)) {
            return;
        }
      
        this.setState({ smallScreen: false });
    }

    render() {
        const { className, classes, ...props } = this.props;

        const { open, smallScreen } = this.state; 
        
        const isLoggedIn = Boolean(localStorage.getItem('login-data'));
        
        const username = isLoggedIn && JSON.parse(localStorage.getItem('login-data')).username;

        return (
            <AppBar 
                className={classnames(classes.root, className)}
                {...props}
            >
                <Toolbar className={classes.toolbar}>
                    <Hidden smDown>
                        {/* <AppLink to="/home" noUnderline label={<img src={'/static/images/header-logo.png'} style={{ height: 56 }} />} /> */}
                        <div className={classes.linksContainer}>
                            <AppLink to="/home" label={<img src={HeaderLogo} style={{ height: 32 }} />} />
                            <AppLink to="/articles" label="Articles" />
                            {/* <AppLink to="/support" label="Support" /> */}
                            <AppLink to="/about" label="About Us" />
                        </div>
                        {
                            isLoggedIn ?
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '1em' }}>
                                <Typography style={{ fontSize: '1em' }}>Hi, {username}</Typography>
                                <IconButton buttonRef={node => this.anchorEl = node} onClick={this.handleToggle}>
                                    <Settings className={classes.icon} />    
                                </IconButton>
                                
                                <Popper open={open} anchorEl={this.anchorEl} transition placement="bottom-end" disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            id="menu-list-grow">
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
                    </Hidden>
                    <Hidden mdUp>
                        <AppLink to="/home" noUnderline label={<img src={HeaderLogo} style={{ height: 56 }} />} style={{ flexGrow: 2 }} />
    
                        <IconButton style={{ flex: 1, justifyContent: 'flex-end' }} buttonRef={node => this.anchorElSmallScreen = node } onClick={this.handleSmallScreen}>
                            <MenuIcon className={classes.icon} />
                        </IconButton>
                        <Popper open={smallScreen} anchorEl={this.anchorElSmallScreen} placement="bottom-end" transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow">
                                    <Paper className={classes.menuRoot}>
                                        <ClickAwayListener onClickAway={this.handleCloseSmallScreen}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleCloseSmallScreen}>
                                                <AppLink to="/home" label="Home" />
                                            </MenuItem>
                                            <MenuItem onClick={this.handleCloseSmallScreen}>
                                                <AppLink to="/articles" label="Articles" />
                                            </MenuItem>
                                            {/* <MenuItem onClick={this.handleCloseSmallScreen}>
                                                <AppLink to="/support" label="Support" />
                                            </MenuItem> */}
                                            <MenuItem onClick={this.handleCloseSmallScreen}>
                                                <AppLink to="/about" label="About" />
                                            </MenuItem>
                                            <Divider style={{ height: 1, backgroundColor: 'white'}} />
                                            <MenuItem onClick={this.handleCloseSmallScreen}>
                                                <AppLink to="/profile" label="Profile" />
                                            </MenuItem>
                                            <MenuItem onClick={this.handleCloseSmallScreen}>
                                                <AppLink to="/logout" label="Logout" />
                                            </MenuItem>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Hidden>
                    
            
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Appbar);