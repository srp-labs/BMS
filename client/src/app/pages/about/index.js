import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
} from '@material-ui/core';

import PageContainer from '../../../components/page-container';
import styles from './styles';

import Jatin from '../../../../assets/images/jatin.jpg';
import Maharshi from '../../../../assets/images/maharshi.jpg';
import Yogesh from '../../../../assets/images/yogesh.jpg';

import Github from '../../../../assets/images/github-logo.svg';
import Facebook from '../../../../assets/images/linkedin-logo.svg';
import Linkedin from '../../../../assets/images/facebook-logo.svg';

const developers = [
    {
        name: "Jatin Goel",
        image: Jatin,
        role: "Backend Developer",
        links: {
            github: "",
            facebook: "",
            linkedin: "",
        }
    },
    {
        name: "Maharshi Roy",
        image: Maharshi,
        role: "Frontend Developer",
        links: {
            github: "",
            facebook: "",
            linkedin: "",
        }
    },
    {
        name: "Yogesh Gupta",
        image: Yogesh,
        role: "Frontend Developer",
        links: {
            github: "",
            facebook: "",
            linkedin: "",
        }
    }
]

const About = ({classes, ...props}) => {
    return (
        <PageContainer className={classes.root}>
            <div className={classes.aboutSection}>
                <Typography className={classes.sectionTitle}>
                    <big>A</big>bout <big>U</big>s
                </Typography>

                <Typography className={classes.aboutText}>
                    Some words here, some words there, to fill the world with words.
                </Typography>
            </div>
            <div className={classes.teamSection}>
                <Typography className={classes.sectionTitle}>
                    <big>O</big>ur <big>T</big>eam
                </Typography>
                
                <Grid container spacing={16} justify="center" className={classes.membersContainer}>
                    {
                        developers.map((member, index) => 
                            <Grid key={index} item xs={12} md={4} lg={3}>
                                <div className={classes.member}>
                                    <img className={classes.memberImage} src={member.image} />
                                    <Typography className={classes.memberText}>{member.name}</Typography>
                                    <Typography className={classes.memberText}>{member.role}</Typography>
                                    <div className={classes.linksSection}>
                                        <a href={member.links.github}>
                                            <img className={classes.linkImage} src={Github} style={{ color: 'blue' }} />
                                        </a>
                                        <a href={member.links.facebook}>
                                            <img className={classes.linkImage} src={Facebook} />
                                        </a>
                                        <a href={member.links.linkedin}>
                                            <img className={classes.linkImage} src={Linkedin} />
                                        </a>
                                    </div>
                                </div>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
            <div className={classes.contactSection}>
            </div>

        </PageContainer>
    )
}

export default withStyles(styles)(About);