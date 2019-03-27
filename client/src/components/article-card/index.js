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

import ChipsContainer from './chips-container';

import FrontendAvatar from '../../../assets/images/react.svg';
import BackendAvatar from '../../../assets/images/server.svg';
import SetupAvatar from '../../../assets/images/management.svg';

let difficultyColors = {
    'Easy': "#8BC34A",
    'Medium': "#FFC107",
    'Advanced': "#FF5722",
};

let FRONTEND_COLOR = "#03A9F4";
let BACKEND_COLOR = "#004D40";
let SETUP_COLOR = "#607D8B";

const ArticleCard = ({ data, classes, ...props }) => {
    const openArticle = () => {
        var win = window.open(data.url, '_blank');
        win.focus();
    }

    let chips = [
        {
            label: data.difficulty.name,
            color: difficultyColors[data.difficulty.name],
        },
    ];

    if(data.frontend_score) { 
        chips.push({
            label: "Front-end",
            color: FRONTEND_COLOR,
            avatar: FrontendAvatar,
        })
    }
    
    if(data.backend_score) { 
        chips.push({
            label: "Back-end",
            color: BACKEND_COLOR,
            avatar: BackendAvatar,
        })
    }
    
    if(data.setup_score) { 
        chips.push({
            label: "Setup",
            color: SETUP_COLOR,
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