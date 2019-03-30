import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
    withTheme,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
} from '@material-ui/core';

import styles from './styles';

import TestImage from '../../../assets/images/test1.jpeg';

const ArticleListItem = ({ data, history, theme, classes, ...props }) => {
    const openArticle = () => {
        var win = window.open(data.url, '_blank');
        win.focus();
    }
    return (
        <ListItem className={classes.root} onClick={openArticle}>
            <ListItemAvatar>
                <Avatar src={TestImage} />
            </ListItemAvatar>
            <ListItemText>{data.title}</ListItemText>
        </ListItem>
    )
} 

export default withRouter(withTheme()(withStyles(styles)(ArticleListItem)));