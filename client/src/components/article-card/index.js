import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
    withTheme,
    Grid,
    Typography,
    Divider,
    Button,
    Card,
    CardHeader,
    CardActions,
    CardActionArea,
} from '@material-ui/core';

import {
    Today,
    Timer,
} from '@material-ui/icons';
import styles from './styles';

import ChipsContainer from './chips-container';

import TestImage from '../../../assets/images/test1.jpeg';

import FrontendAvatar from '../../../assets/images/react.svg';
import BackendAvatar from '../../../assets/images/server.svg';
import SetupAvatar from '../../../assets/images/management.svg';
import NoteworthyAvatar from '../../../assets/images/noteworthy.png';

const getChips = (data, theme) => {
    let chips = [
        {
            label: data.difficulty.name,
            color: theme.palette.articleColors.difficulty[data.difficulty.name],
        },
    ];

    if (data.frontend_score) {
        chips.push({
            label: "Front-end",
            color: theme.palette.articleColors.type["frontend"],
            avatar: FrontendAvatar,
        })
    }

    if (data.backend_score) {
        chips.push({
            label: "Back-end",
            color: theme.palette.articleColors.type["backend"],
            avatar: BackendAvatar,
        })
    }

    if (data.setup_score) {
        chips.push({
            label: "Setup",
            color: theme.palette.articleColors.type["setup"],
            avatar: SetupAvatar,
        })
    }

    if (data.noteworthy) {
        chips.push({
            label: "Noteworthy",
            color: theme.palette.articleColors.type["noteworthy"],
            avatar: NoteworthyAvatar,
        })
    }

    return chips;
}

const ArticleCard = ({ data, history, theme, classes, ...props }) => {
    const isLoggedIn = Boolean(localStorage.getItem('username'));
    const chips = getChips(data, theme);    
    
    const openArticle = () => {
        var win = window.open(data.url, '_blank');
        win.focus();
    }
    
    const markAsRead = (event) => {
        if(isLoggedIn) {
            // open rating sweet alert.
            console.log("Rating sweet alert.");
        }
        else {
            // fire sweet alert with login redirect link.
            console.log("Login link sweet alert.");
        }
    }
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea className={classes.childMargins} onClick={openArticle}>
                    <CardHeader 
                        classes={{
                            root: classes.cardHeaderRoot,
                            content: classes.cardHeaderContent,
                            subheader: classes.cardHeaderSubHeader,
                        }}
                        title={
                            <Typography className={classes.articleTitle} color="secondary" title={data.title}>
                                {data.title}
                            </Typography>
                        }
                        subheader={new Date(data.publish_date).toDateString()} />

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
                    </div>
                </CardActionArea>

                <Divider className={classes.divider} />
                
                <CardActions className={classes.metaInformation}>
                    {/* <Typography className={classes.metaText}>
                        <People />
                        Jatin Goel
                    </Typography> */}
                    {/* <Typography className={classes.metaText}>
                        <Today />
                        {data.publish_date}
                    </Typography> */}
                    <Typography className={classes.metaText}>
                        <Timer />
                        {data.read_time} min
                    </Typography>
                    <Button variant="outlined" color="secondary" onClick={markAsRead}>
                        Mark as Read
                    </Button>
                </CardActions>

                <div className={classes.bottomHighlight} />
            </Card>
        </Grid>
    )
}

export default withRouter(withTheme()(withStyles(styles)(ArticleCard)));