import React from 'react';
import classnames from 'classnames';
import {
    withStyles,
    Grid,
    Typography,
    Avatar,
    Divider,
} from '@material-ui/core';

import {
    Bookmark,
    BookmarkBorder,
    Today,
    Timer,
    People,
} from '@material-ui/icons';
import styles from './styles';

import Jatin from '../../../assets/images/jatin.jpg';

const ArticleCard = ({ classes, ...props }) => {
    return (
        <Grid item xs={12} md={6}>
            <div className={classes.root}>
                <div className={classes.cardTitle}>
                    <Typography className={classes.articleTitle}>
                        Introduction to Bulma with React
                    </Typography>
                    <BookmarkBorder />
                </div>
                <div className={classes.cardContent}>
                    <Avatar src={Jatin} className={classes.articleImage} />
                    <Typography className={classes.articleDescription}>
                        In this article you will learn the basics of using Bulma components in your React apps using the react-bulma-components library.
                    </Typography>
                </div>

                <Divider className={classes.divider} />

                <div className={classes.metaInformation}>
                    <Typography className={classes.writer}>
                        <People />
                        Jatin Goel
                    </Typography>
                    <Typography className={classes.writer}>
                        <Today />
                        29th Feb, 2019
                    </Typography>
                    <Typography className={classes.writer}>
                        <Timer />
                        3 min
                    </Typography>
                </div>
                <div className={classes.bottomHighlight} />
            </div>
        </Grid>
    )
}

export default withStyles(styles)(ArticleCard);