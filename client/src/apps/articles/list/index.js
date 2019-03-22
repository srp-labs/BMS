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
            <ArticleCard />

            <ArticleCard />
        </PageContainer>
    )
}

export default withStyles(styles)(List);