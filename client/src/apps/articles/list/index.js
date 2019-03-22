import React from 'react';
import {
    withStyles,
    Grid,
    Typography,
} from '@material-ui/core';

import { PageContainer, ArticleCard } from '../../../components';
import styles from './styles';

const List = ({classes, ...props}) => {
    return (
        <PageContainer className={classes.root}>
            <Typography className={classes.sectionTitle}>
                <big>A</big>rticles
            </Typography>

            <Grid container spacing={16} className={classes.cardContainer}>
                <ArticleCard />

                <ArticleCard />
            </Grid>
        </PageContainer>
    )
}

export default withStyles(styles)(List);