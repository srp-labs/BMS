import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
} from '@material-ui/core';

import PageContainer from '../../../components/page-container';
import styles from './styles';

// import Jatin from '../../../../assets/images/jatin.jpg';
// import Maharshi from '../../../../assets/images/maharshi.jpg';
// import Yogesh from '../../../../assets/images/yogesh.jpg';

// import Github from '../../../../assets/images/github-logo.svg';
// import Facebook from '../../../../assets/images/linkedin-logo.svg';
// import Linkedin from '../../../../assets/images/facebook-logo.svg';

const developers = [
    {
        name: "Jatin Goel",
        image: '/static/images/jatin.jpg',
        role: "Backend Developer",
        links: {
            github: "",
            facebook: "",
            linkedin: "",
        }
    },
    {
        name: "Maharshi Roy",
        image: '/static/images/maharshi.jpg',
        role: "Frontend Developer",
        links: {
            github: "",
            facebook: "",
            linkedin: "",
        }
    },
    // {
    //     name: "Yogesh Gupta",
    //     image: Yogesh,
    //     role: "Frontend Developer",
    //     links: {
    //         github: "",
    //         facebook: "",
    //         linkedin: "",
    //     }
    // }
]

const About = ({classes, ...props}) => {
    return (
        <PageContainer className={classes.root}>
            <div className={classes.aboutSection}>
                <Typography className={classes.sectionTitle}>
                    <big>A</big>bout
                </Typography>

                <Typography className={classes.aboutText}>
                    Team from IIIT-Allahabad (Graduands 2019) was part of software development team of <a className={classes.anchor} target="_blank" href="https://aviral.iiita.ac.in/">Aviral Project</a> for the duration January 2018 to March 2019. The objective of the project was to develop Secured , 
                    Flexible and Robust Software for Admission, Assessment, 
                    Award Section based on Credit Choice Linked Continuous Assessment 
                    and Award Ordinance wef from July 2018. We contributed in Design, Development and Deployment and learnt a lot 
                    about cutting-edge technologies like Django and React JS. We want to share our experience through a series of tutorials on 
                    <a className={classes.anchor} target="_blank" href="https://medium.com/@srplabs.in"> Medium</a>
                </Typography>
            </div>
            <div className={classes.teamSection}>
                <Typography className={classes.sectionTitle}>
                    <big>O</big>ur <big>T</big>eam
                </Typography>
                
                <Grid container spacing={16} justify="center" className={classes.membersContainer}>
                    {
                        developers.map((member, index) => 
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <div className={classes.member}>
                                    <img className={classes.memberImage} src={member.image} />
                                    <Typography className={classes.memberText}>{member.name}</Typography>
                                    <Typography className={classes.memberText}>{member.role}</Typography>
                                    <div className={classes.linksSection}>
                                        <a href={member.links.github}>
                                            <img className={classes.linkImage} src={'/static/images/github-logo.svg'} style={{ color: 'blue' }} />
                                        </a>
                                        <a href={member.links.facebook}>
                                            <img className={classes.linkImage} src={'/static/images/facebook-logo.svg'} />
                                        </a>
                                        <a href={member.links.linkedin}>
                                            <img className={classes.linkImage} src={'/static/images/linkedin-logo.svg'} />
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