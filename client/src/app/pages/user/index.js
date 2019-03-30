import React from 'react';
import classnames from 'classnames';
import {
    withStyles, 
    Typography,
    Grid,
    LinearProgress,
} from '@material-ui/core';

import API from '../../../services/api';
import { PageContainer } from '../../../components';
import styles from './styles';

import AccountImage from '../../../../assets/images/logo.svg';
import Badge from '../../../../assets/images/medal.svg';
import ThumbsUp from '../../../../assets/images/thumbs-up-emoji.svg';

class User extends React.Component {
    state = {
        loading: true,
    };
    
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500);
    }

    render() {
        const { classes } = this.props;

        const { loading } = this.state;

        return (
            <PageContainer loading={loading} className={classes.container}>
                <div className={classes.userInfoSection}>
                    <div className={classes.userInfoContent}>
                        <img src={AccountImage} className={classes.userImage} />
                        <Typography className={classes.name}>
                            Adam , the First
                        </Typography>
                        <div className={classes.extraTextWrapper}>
                            <Typography className={classes.extra}>icandoit@nike.slogan</Typography>
                            <Typography className={classes.extra}>Bermuda Triangle</Typography>
                        </div>

                        <div className={classes.badges}>
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
                            Nice Going. Keep up the good work. 
                            <img src={ThumbsUp} style={{ height: 32, marginLeft: 4, transform: 'translateY(4px)', }}/>	
                        </Typography>
                        <Typography>
                            Articles Read: 
                            <span className={classes.articleReadCount}>84</span>
                            / 100
                        </Typography>
                    </div>
                    <LinearProgress 
                        variant="determinate" 
                        value={84} 
                        classes={{
                            root: classes.progressRoot,
                            barColorPrimary: classes.progressBarColorPrimary,
                        }} />
                </div>

                <div className={classes.articlesSection}>
                            
                </div>
            </PageContainer>
        )
    }
}

export default withStyles(styles)(User);