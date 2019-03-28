import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import {
    withStyles, 
    Typography,
    Grid,
    Button,
} from '@material-ui/core';

import API from '../../../services/api';
import { PageContainer, ArticleCard } from '../../../components';
import styles from './styles';

import HomeBanner from "../../../../assets/images/homebanner.png";

class Home extends React.Component {
    state = {
        loading: true,
        articles: [],
    };
    
    // sort descending according to date.
    sortByDate = (x, y) => {
        let xDate = new Date(x.publish_date), yDate = new Date(y.publish_date);

        return (xDate < yDate) ? 1 : -1;
    }

    componentDidMount() {
        API.get('blogs/')
            .then(response => {
                const { status, list } = response.data;

                // Take the top 3 latest ones.
                const latestArticles = list.sort(this.sortByDate).slice(0, 3);

                this.setState({
                    loading: false,
                    articles: latestArticles,
                });
            })
            .catch(console.error);
    }


    render() {
        const { classes } = this.props;

        const { loading, articles } = this.state;

        return (
            <PageContainer loading={loading}>
                <div className={classes.bannerSection}>
                    <img className={classes.bannerImage} src={HomeBanner} />
                    <Typography className={classes.bannerText}>
                        We are here to share our experiences and knowledge building web apps.
                    </Typography>
                    <Typography className={classes.bannerText}>
                        Django, React and more ...
                    </Typography>
                </div>
    
                <div className={classes.latestArticlesSection}>
                    <Typography className={classes.sectionTitle} color="secondary">
                        <big>L</big>atest <big>A</big>rticles
                    </Typography>
                    
                    <Grid container spacing={16} className={classes.cardContainer}>
                        {
                            articles.map((article, index) => <ArticleCard 
                                key={index}
                                data={article} />)
                        }
                    </Grid>

                    <Button variant="outlined" color="secondary" className={classes.viewAllLink}>
                        <Link to="/articles">
                            <Typography color="secondary">
                                View All Articles
                            </Typography>
                        </Link>
                    </Button>
                </div>
    
            </PageContainer>
        )
    }
}

export default withStyles(styles)(Home);