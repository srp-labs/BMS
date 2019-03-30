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
} from '@material-ui/icons';

import AppLink from './link';
import styles from './styles';

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
        
        return (
            <AppBar 
                className={classnames(classes.root, className)}
                {...props}
            >
                <Toolbar className={classes.toolbar}>
                    <Hidden xlDown>
                        <MenuIcon color="primary" />    
                    </Hidden>
                    <div className={classes.linksContainer}>
                        <AppLink to="/home" label="Home" />
                        <AppLink to="/articles" label="Articles" />
                        <AppLink to="/opportunities" label="Opportunities" />
                        <AppLink to="/donate" label="Donate" />
                        <AppLink to="/support" label="Support" />
                        <AppLink to="/about" label="About Us" />
                    </div>
                    
                    {
                        isLoggedIn ?
                        <div style={{ position: 'relative' }}>
                            <IconButton buttonRef={node => this.anchorEl = node} onClick={this.handleToggle}>
                                <Person className={classes.icon} />    
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