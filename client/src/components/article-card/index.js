import React from 'react';
import classnames from 'classnames';

import {
    withStyles,
    withTheme,
    Grid,
    Typography,
    Divider,
    ButtonBase,
} from '@material-ui/core';

import {
    Bookmark,
    BookmarkBorder,
    Today,
    Timer,
} from '@material-ui/icons';
import styles from './styles';

import ChipsContainer from './chips-container';

import TestImage from '../../../assets/images/test1.jpeg';

import FrontendAvatar from '../../../assets/images/react.svg';
import BackendAvatar from '../../../assets/images/server.svg';
import SetupAvatar from '../../../assets/images/management.svg';

const ArticleCard = ({ data, theme, classes, ...props }) => {
    const openArticle = () => {
        var win = window.open(data.url, '_blank');
        win.focus();
    }

    let chips = [
        {
            label: data.difficulty.name,
            color: theme.palette.difficulty[data.difficulty.name],
        },
    ];

    if(data.frontend_score) { 
        chips.push({
            label: "Front-end",
            color: theme.palette.articleType["frontend"],
            avatar: FrontendAvatar,
        })
    }
    
    if(data.backend_score) { 
        chips.push({
            label: "Back-end",
            color: theme.palette.articleType["backend"],
            avatar: BackendAvatar,
        })
    }
    
    if(data.setup_score) { 
        chips.push({
            label: "Setup",
            color: theme.palette.articleType["setup"],
            avatar: SetupAvatar,
        })
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

                <ChipsContainer chips={chips} />

                <Divider className={classes.divider} />

                <div className={classes.cardContent}>
                    <div className={classes.articleImageWrapper}>
                        {
                            data.thumbnail && false ?
                            <img src={data.thumbnail} className={classes.articleImage} />:
                            <img src={TestImage} className={classes.articleImage} />
                        }
                    </div>
                    {/* <Typography className={classes.articleDescription}>Brief Info.</Typography> */}
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

export default withTheme()(withStyles(styles)(ArticleCard));