import React from 'react';
import {
    withStyles,
    Grid,
    Typography,
} from '@material-ui/core';

import API from '../../../services/api';
import { PageContainer, ArticleCard } from '../../../components';
import styles from './styles';

class List extends React.Component {
    state = {
        loading: true,
        articles: [],
    };

    componentDidMount() {
        API.get('blogs/')
            .then(response => {
                const { status, list } = response.data;

                this.setState({
                    loading: false,
                    articles: list,
                });
            })
            .catch(console.error);
    }


    render() {
        const { classes } = this.props;

        const { loading, articles } = this.state;

        return (
            <PageContainer className={classes.root} loading={loading}>
                {/* <Typography className={classes.sectionTitle}>
                    <big>A</big>rticles
                </Typography> */}
    
                <Grid container spacing={16} className={classes.cardContainer}>
                    {
                        articles.map((article, index) => <ArticleCard 
                            key={index}
                            data={article} />)
                    }
                </Grid>
            </PageContainer>
        )
    }
}

export default withStyles(styles)(List);