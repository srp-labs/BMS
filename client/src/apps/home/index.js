import React from 'react';
import classnames from 'classnames';
import {
    withStyles, 
    Typography,
    Grid,
} from '@material-ui/core';

import { PageContainer, ArticleCard } from '../../components';
import styles from './styles';

import Logo from "../../../assets/images/logo.png";

const Home = ({classes, ...props}) => {
    return (
        <PageContainer>
            <div className={classes.bannerSection}>
                <img className={classes.bannerImage} src={Logo} />
                <Typography className={classes.bannerText}>
                    We are here to share our experiences and knowledge building web apps.
                </Typography>
                <Typography className={classes.bannerText}>
                    Django, React and more ...
                </Typography>
            </div>

            <div className={classes.latestPostsSection}>
                <Typography className={classes.latestPostsTitle}>
                    <big>L</big>atest <big>P</big>osts
                </Typography>
                
                {/* <Grid container spacing={16}> */}

                    <ArticleCard />

                    <ArticleCard />
                
                {/* </Grid> */}
            </div>

        </PageContainer>
    )
}

export default withStyles(styles)(Home);