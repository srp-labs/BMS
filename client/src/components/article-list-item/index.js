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

// import TestImage from '../../../assets/images/test1.jpeg';

const ArticleListItem = ({ data, history, theme, classes, ...props }) => {
    const openArticle = () => {
        var win = window.open(data.url, '_blank');
        win.focus();
    }
    return (
        <ListItem className={classes.root} onClick={openArticle}>
            <ListItemAvatar>
                {
                    data.thumbnail ?
                        <Avatar src={data.thumbnail} /> :
                        <Avatar src={'/static/images/test1.jpeg'} />
                }
            </ListItemAvatar>
            <ListItemText
                classes={{
                    secondary: classes.secondaryColor,
                }}
                primary={data.title}
                secondary={`Read on ${new Date(data.read_date).toDateString()}`} />
        </ListItem>
    )
} 

export default withRouter(withTheme()(withStyles(styles)(ArticleListItem)));