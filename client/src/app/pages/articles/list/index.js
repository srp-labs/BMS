import React from 'react';
import {
    withStyles,
    Grid,
    Typography,
} from '@material-ui/core';

import API from '../../../../services/api';
import { PageContainer, ArticleCard } from '../../../../components';
import styles from './styles';

class List extends React.Component {
    state = {
        loading: true,
        articles: [],
    };

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

                API.get('mark_read/', options)
                    .then(markReadResponseHandler(list))
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