import React from 'react';
import {
    withStyles,
    Grid,
} from '@material-ui/core';

import { PageContainer, ArticleCard } from '../../../components';
import styles from './styles';

const List = ({classes, ...props}) => {
    return (
        <PageContainer>
            <Grid container spacing={16} className={classes.cardContainer}>
                <ArticleCard />

                <ArticleCard />
            </Grid>
        </PageContainer>
    )
}

export default withStyles(styles)(List);