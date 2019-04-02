import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import {
    withStyles, 
    Typography,
    Grid,
    Button,
    Hidden,
} from '@material-ui/core';

import API from '../../../services/api';
import { PageContainer, ArticleCard } from '../../../components';
import styles from './styles';

// import HomeBanner from "../../../../assets/images/homebanner.png";
// import ReactBanner from "../../../../assets/images/react.png";
// import DjangoBanner from "../../../../assets/images/django.png";

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

        const isLoggedin = Boolean(localStorage.getItem('login-data'));

        const markReadResponseHandler = articlesList => response => {
            const { status, list } = response.data;
            
            // Map of blog-id and data object.
            let readBlogsMap = new Map();
            list.forEach(item => readBlogsMap.set(item.blog.id, item));  

            let computedList = articlesList.map(item => {
                let isRead = readBlogsMap.has(item.id), readObject = readBlogsMap.get(item.id);

                return {
                    ...item,
                    read: isRead,
                    rating: isRead && readObject.rating,
                }
            });
            
            this.setState({
                loading: false,
                articles: computedList,
            });            
        }
        
        const BlogsResponseHandler = (response) => {
            const { status, list } = response.data;
            
            if(isLoggedin) {
                let options = {
                    params: {
                        username: JSON.parse(localStorage.getItem('login-data')).username,
                    },
                };
                
                const latestArticles = list.sort(this.sortByDate).slice(0, 3);

                API.get('mark_read/', options)
                    .then(markReadResponseHandler(latestArticles))
                    .catch(console.error);
            }
            else {
                this.setState({
                    loading: false,
                    articles: list,
                });
            }
        }

        API.get('blogs/')
            .then(BlogsResponseHandler)
            .catch(console.error);
    }


    render() {
        const { classes } = this.props;

        const { loading, articles } = this.state;

        return (
            <PageContainer loading={loading}>
                <div className={classes.bannerSection}>
                    <div className={classes.bannerImagesContainer}>
                        <Hidden smDown>
                            <img className={classes.bannerSideImage} src={'/static/images/django.png'} />
                        </Hidden>
                        <img className={classes.bannerImage} src={'/static/images/homebanner.png'} />
                        <Hidden smDown>
                            <img className={classes.bannerSideImage} src={'/static/images/react.png'} style={{ transform: 'scale(0.6)' }}/>
                        </Hidden>
                    </div>
                    <Typography className={classes.bannerText}>
                        We've built a simple yet powerful blog management system which allows you to manage your blogs written on different blogging sites. <br /> The system provides features such as maintaining a user-base, and tracking user's progress out-of-the-box. <br /> The system is completely open-source. We plan to incorporate an 'Opportunities' feature - that provides your <br /> blog's users with job postings bases on the reading habits. 
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
                            <Typography color="secondary" style={{ padding: '5px 16px'}}>
                                View All Articles
                            </Typography>
                        </Link>
                    </Button>
                </div>

                <div className={classes.timelineSection}>
                </div>
    
            </PageContainer>
        )
    }
}

export default withStyles(styles)(Home);