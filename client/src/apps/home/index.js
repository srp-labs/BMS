import React from 'react';
import classnames from 'classnames';
import {
    withStyles,
} from '@material-ui/core';
import PageContainer from '../../components/page-container';
import styles from './styles';

const Home = ({classes, ...props}) => {
    return (
        <PageContainer>
            <div className={classes.bannerSection}>
                
            </div>

            <div className={classes.latestPostsSection}>

            </div>

        </PageContainer>
    )
}

export default withStyles(styles)(Home);