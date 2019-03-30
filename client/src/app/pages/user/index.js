import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import {
    withStyles, 
    withTheme,
    Typography,
    Grid,
    LinearProgress,
    List,
} from '@material-ui/core';

import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios';

import API from '../../../services/api';
import { PageContainer, ArticleListItem } from '../../../components';
import styles from './styles';

import MaleImage from '../../../../assets/images/male.svg';
import FemaleImage from '../../../../assets/images/female.svg';
import Badge from '../../../../assets/images/medal.svg';
import ThumbsUp from '../../../../assets/images/thumbs-up-emoji.svg';

const data = [ 
    {name: 'Front-end', value: 400}, 
    {name: 'Back-end', value: 300},
    {name: 'Setup-score', value: 300},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class User extends React.Component {
    state = {
        loading: true,
        user: {},
        readArticles: [],
    };
    
    // sort descending according to date.
    sortByDate = (x, y) => {
        let xDate = new Date(x.read_date), yDate = new Date(y.read_date);

        return (xDate < yDate) ? 1 : -1;
    }

    componentDidMount() {
        const isLoggedin = Boolean(localStorage.getItem('login-data'));

        if(!isLoggedin) {
            this.props.history.push('/home');
        }

        let options = {
            params: {
                username: JSON.parse(localStorage.getItem('login-data')).username,
            },
        };

        axios.all([
            API.get('blogs/'),
            API.get('mark_read/', options),
            API.get('reader_detail/', options),
        ])
        .then(axios.spread((blogs_, readList_, userDetails_) => {
            let blogs, readList, userDetails;

            blogs = blogs_.data.list;
            readList = readList_.data.list;
            userDetails = userDetails_.data.detail;
            
            // Map of blog-id and data object.
            let readBlogsMap = new Map();
            readList.forEach(item => readBlogsMap.set(item.blog.id, item));

            let readArticles = blogs.filter(item => readBlogsMap.has(item.id)).map(item => ({
                ...item,
                rating: readBlogsMap.get(item.id).rating,
                read_date: readBlogsMap.get(item.id).date,
            })).sort(this.sortByDate);

            this.setState({
                loading: false,
                readArticles: readArticles,
                user: {
                    ...userDetails,
                    gender: userDetails.gender.name,
                    region: userDetails.region.name,
                },
            });
        }))
        .catch(console.error);
    }

    renderLegendText(value, entry) {
        const { color } = entry;
      
        return <span style={{ color }}><Typography>{value}</Typography></span>;
    }

    render() {
        const { classes, theme } = this.props;

        const { loading, user, readArticles } = this.state;

        return (
            <PageContainer loading={loading} className={classes.container}>
                <div className={classes.userInfoSection}>
                    <div className={classes.userInfoContent}>
                        {/* Image goes here */}    
                        <img 
                            src={user.gender == "Male" ? MaleImage : FemaleImage} 
                            className={classes.userImage} />
                        <Typography className={classes.name}>
                            {/* Name goes here */}
                            {user.full_name}
                        </Typography>
                        <div className={classes.extraTextWrapper}>
                            {/* Email goes here */}    
                            <Typography className={classes.extra}>{user.email}</Typography>
                            {/* Region goes here */}    
                            <Typography className={classes.extra}>{user.region}</Typography>
                        </div>

                        <div className={classes.badges}>
                            {/* Need an array of badges, with some type - frontend, backend so as to choose from predefined images. */}
                            {
                                [0, 1, 2].map((badge, index) => 
                                    <img key={index} src={Badge} className={classes.badge} />
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className={classes.progressSection}>
                    <div className={classes.progressMessage}>
                        <Typography>
                           {/* Some message based on progress goes here. */}
                            Nice Going. Keep up the good work. 
                            <img src={ThumbsUp} className={classes.thumbsUpImage}/>	
                        </Typography>
                        <Typography>
                            Articles Read: 
                            <span className={classes.articleReadCount}>
                                {/* Articles Read count goes here */}
                                84
                            </span>
                            {/* Articles total count goes here. */}
                            / 100
                        </Typography>
                    </div>
                    <LinearProgress 
                        variant="determinate" 
                        /* Articles Read count goes here */
                        value={84} 
                        classes={{
                            root: classes.progressRoot,
                            barColorPrimary: classes.progressBarColorPrimary,
                        }} />
                </div>
                
                <Grid container spacing={16} style={{ margin: 0, width: '100%', }}>
                    <Grid item xs={12} md={6} className={classes.statisticsSection}>
                        <Typography className={classes.sectionTitle} color="secondary">
                            <big>S</big>tatistics
                        </Typography>
                        
                        <ResponsiveContainer width="100%" height={600}>
                            <PieChart>
                                <Pie
                                    data={data} 
                                    cx="50%" 
                                    cy="50%"
                                    // outerRadius={240} 
                                    labelLine={false} 
                                    label={{
                                        value: "Semester",
                                        // position: "insideBottom",
                                        fontFamily: theme.typography.fontFamily,
                                        fill: "#FFF",
                                        style: {
                                            fontWeight: "bold",
                                        },
                                    }} 
                                    fill="#8884d8">
                                    {
                                        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                                    }
                                </Pie>
                                <Legend formatter={this.renderLegendText} />
                            </PieChart>
                        </ResponsiveContainer>
                    </Grid>

                    {/*  List of all read/completed articles goes here. */}
                    <Grid item xs={12} md={6} className={classes.articlesSection}>
                        <Typography className={classes.sectionTitle} color="secondary">
                            <big>C</big>ompleted <big>A</big>rticles
                        </Typography>
                        <List className={classes.listRoot}>
                            {
                                readArticles.map((article, index) =>
                                    <ArticleListItem 
                                        key={index}
                                        data={article} />
                                )
                            }
                        </List>
                    </Grid>
                </Grid>
            </PageContainer>
        )
    }
}

export default withRouter(withTheme()(withStyles(styles)(User)));