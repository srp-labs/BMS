import React from 'react';
import classnames from 'classnames';
import {
    withStyles, 
    Typography,
    Grid,
    LinearProgress,
    List,
} from '@material-ui/core';

import API from '../../../services/api';
import { PageContainer, ArticleListItem } from '../../../components';
import styles from './styles';

import AccountImage from '../../../../assets/images/logo.svg';
import Badge from '../../../../assets/images/medal.svg';
import ThumbsUp from '../../../../assets/images/thumbs-up-emoji.svg';

class User extends React.Component {
    state = {
        loading: true,
        list: [],
    };
    
    componentDidMount() {
        API.get('blogs/')
            .then(response => this.setState({ list: response.data.list, loading: false }))
            .catch(console.error);
    }

    render() {
        const { classes } = this.props;

        const { loading, list } = this.state;

        return (
            <PageContainer loading={loading} className={classes.container}>
                <div className={classes.userInfoSection}>
                    <div className={classes.userInfoContent}>
                        {/* Image goes here */}    
                        <img src={AccountImage} className={classes.userImage} />
                        <Typography className={classes.name}>
                            {/* Name goes here */}
                            Adam , the First
                        </Typography>
                        <div className={classes.extraTextWrapper}>
                            {/* Email goes here */}    
                            <Typography className={classes.extra}>icandoit@nike.slogan</Typography>
                            {/* Region goes here */}    
                            <Typography className={classes.extra}>Bermuda Triangle</Typography>
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

                {/*  List of all read/completed articles goes here. */}
                <div className={classes.articlesSection}>
                    <Typography className={classes.sectionTitle} color="secondary">
                        <big>C</big>ompleted <big>A</big>rticles
                    </Typography>
                    <List className={classes.listRoot}>
                        {
                            list.map((article, index) =>
                                <ArticleListItem 
                                    key={index}
                                    data={article} />
                            )
                        }
                    </List>
                </div>
            </PageContainer>
        )
    }
}

export default withStyles(styles)(User);