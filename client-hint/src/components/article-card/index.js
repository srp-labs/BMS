import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
    withTheme,
    Grid,
    Typography,
    Divider,
    Button,
    Card,
    CardHeader,
    CardActions,
    CardActionArea,
} from '@material-ui/core';

import {
    Timer,
    Star,
    StarBorder,
    StarHalf,
} from '@material-ui/icons';
import styles from './styles';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

import ChipsContainer from './chips-container';

// import TestImage from '../../../assets/images/test1.jpeg';

// import FrontendAvatar from '../../../assets/images/react.svg';
// import BackendAvatar from '../../../assets/images/server.svg';
// import SetupAvatar from '../../../assets/images/management.svg';
// import NoteworthyAvatar from '../../../assets/images/noteworthy.png';
import RatingComponent from '../rating-component';
import API from '../../services/api';

const getChips = (data, theme) => {
    let chips = [
        {
            label: data.difficulty.name,
            color: theme.palette.articleColors.difficulty[data.difficulty.name],
        },
    ];

    if (data.frontend_score) {
        chips.push({
            label: "Front-end",
            color: theme.palette.articleColors.type["frontend"],
            avatar: '/static/images/react.svg',
        })
    }

    if (data.backend_score) {
        chips.push({
            label: "Back-end",
            color: theme.palette.articleColors.type["backend"],
            avatar: '/static/images/server.svg',
        })
    }

    if (data.setup_score) {
        chips.push({
            label: "Setup",
            color: theme.palette.articleColors.type["setup"],
            avatar: '/static/images/management.svg',
        })
    }

    if (data.noteworthy) {
        chips.push({
            label: "Noteworthy",
            color: theme.palette.articleColors.type["noteworthy"],
            avatar: '/static/images/noteworthy.svg',
        })
    }

    return chips;
}

class ArticleCard extends React.Component {
    state = {
        rating: 0,
    };

    openArticle(data) {
        var win = window.open(data.url, '_blank');
        win.focus();
    }

    submit = () => {
        const reactSwal = withReactContent(Swal);
        
        API.post('mark_read/', {
            username: JSON.parse(localStorage.getItem('login-data')).username,
            rating: this.state.rating,
            blog: this.props.data
        }).then(response => {
            if (response.data.status == 'SUCCESS') 
                reactSwal.fire({
                    type: 'success',
                    text: 'Marked as Read !!',
                    timer: 3000,
                    onClose: () => window.location.reload()
                })
            else 
                reactSwal.fire({
                    type: 'error',
                    text: 'Error Occured',
                    timer: 3000,
                });
        })
        .catch(error => reactSwal.fire({
            type: 'error',
            text: 'Error Occured',
            timer: 3000,
        }));
    }

    markAsRead = (event) => {
        event.preventDefault();
        const reactSwal = withReactContent(Swal);

        //check if user is logged-in
        const isLoggedIn = localStorage.getItem('login-data');

        if (isLoggedIn) {
            reactSwal.fire({
                title: <Typography>Rate your Experience</Typography>,
                html: <RatingComponent setRating={(rating) => this.setState({ rating })} />,
                preConfirm: this.submit,
                customClass: { content: 'sweet-alert-content' }   //defined in index.html style tag
            });
        }
        else
            reactSwal.fire({
                title: 'Login Required',
                text: 'Please login first to mark rating',
                timer: 3000,
                onClose: () => this.props.history.push('/login')
            })
    }

    render() {
        const { data, history, theme, classes, ...props } = this.props;

        const chips = getChips(data, theme);

        return (
            <Grid item xs={12} md={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea className={classes.childMargins} onClick={this.openArticle.bind(this, data)}>
                        <CardHeader
                            classes={{
                                root: classes.cardHeaderRoot,
                                content: classes.cardHeaderContent,
                                subheader: classes.cardHeaderSubHeader,
                            }}
                            title={
                                <Typography className={classes.articleTitle} color="secondary" title={data.title}>
                                    {data.title}
                                </Typography>
                            }
                            subheader={new Date(data.publish_date).toDateString()} />

                        <ChipsContainer chips={chips} />

                        <Divider className={classes.divider} />

                        <div className={classes.cardContent}>
                            <div className={classes.articleImageWrapper}>
                                <img src={'/static/images/'+data.id+'.jpeg'} className={classes.articleImage} />
                            </div>
                        </div>
                    </CardActionArea>

                    <Divider className={classes.divider} />

                    <CardActions className={classes.metaInformation}>
                        <Typography className={classes.metaText}>
                            <Timer />
                            {data.read_time} min
                        </Typography>
                        {
                            data.read ?
                            <div style={{ display: 'flex' }}>
                            {
                                [1, 2, 3, 4, 5].map((count, index) => {
                                    return data.rating >= count ?
                                    <Star key={index} color="secondary" /> :
                                    <StarBorder key={index} color="secondary" />
                                })
                            }
                            </div> :
                            <Button variant="outlined" color="secondary" onClick={this.markAsRead}>Mark as Read</Button>
                        }
                    </CardActions>
        
                    <div className={classes.bottomHighlight} />
                </Card>
            </Grid>
        )
    }
} 

export default withRouter(withTheme()(withStyles(styles)(ArticleCard)));