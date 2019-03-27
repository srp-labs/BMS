import React from 'react';
import classnames from 'classnames';

import {
    withStyles,
    Grid,
    Typography,
    Avatar,
    Divider,
    ButtonBase,
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



const ArticleCard = ({ data, classes, ...props }) => {
    const openArticle = () => {
        var win = window.open(data.url, '_blank');
        win.focus();
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <ButtonBase className={classes.root} onClick={openArticle}>
                <div className={classes.cardTitle}>
                    <Typography className={classes.articleTitle} title={data.title}>
                        {data.title}
                    </Typography>
                    {/* <BookmarkBorder /> */}
                </div>
                <div className={classes.cardContent}>
                    <img src={data.thumbnail} className={classes.articleImage} />
                    {/* <Typography className={classes.articleDescription}>
                        In this article you will learn the basics of using Bulma components in your React apps using the react-bulma-components library.
                    </Typography> */}
                </div>

                <Divider className={classes.divider} />

                <div className={classes.metaInformation}>
                    {/* <Typography className={classes.metaText}>
                        <People />
                        Jatin Goel
                    </Typography> */}
                    <Typography className={classes.metaText}>
                        <Today />
                        {data.publish_date}
                    </Typography>
                    <Typography className={classes.metaText}>
                        <Timer />
                        {data.read_time} min
                    </Typography>
                </div>
                <div className={classes.bottomHighlight} />
            </ButtonBase>
        </Grid>
    )
}

export default withStyles(styles)(ArticleCard);