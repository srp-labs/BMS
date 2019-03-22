import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
} from '@material-ui/core';

import PageContainer from '../../components/page-container';
import styles from './styles';

import Jatin from '../../../assets/images/jatin.jpg';
import Maharshi from '../../../assets/images/maharshi.jpg';
import Yogesh from '../../../assets/images/yogesh.jpg';

import Github from '../../../assets/images/github-logo.svg';
import Facebook from '../../../assets/images/linkedin-logo.svg';
import Linkedin from '../../../assets/images/facebook-logo.svg';

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
                    Abra ka dabra, jadooo mai tu aaja. LOOOLLLL<br />
                    Bhukhmari se, azadi
                    Haan bhed bhaav se, azadi
                    Haan pachhwaad se, azadi
                    Hum leke rahenge, azadi
                    Tum kuchh bhi kar lo, azadi
                    
                    Azadi... Azadi... Azadi...
                    
                    [Chorus:]
                    Ho tera pinjra mein jaal ni khana
                    Parindeya ne udd jaana tera pinjra
                    Tera mukk jaana sara lana baana
                    Parindeya ne udd jaana tera pinjra
                    Ho tera pinjra mein jaal ni khana
                    Parindeya ne udd jaana tera pinjra
                    Tera mukk jaana sara lana baana
                    Parindeya ne udd jaana tera pinjra
                    
                    [Verse 1: Divine]
                    Haan, Bahot baithe chupchaap
                    Kya ghante ka insaaf
                    Desh kaise hoga saaf
                    Inki neeyat main hai daag
                    Sirf karte rahenge baat
                    Alag shakal wahi jaat
                    Vote milne par ye khaas
                    Phir gayab pure saal
                    Haan mera bhai hai toh noto ki sarkar hai na
                    Note se banate aapne beto ko ye star hai na
                    Kitne bekaar kyun ye aapas mein jhankaar hai na
                    Baaki pura desh dube inki naiyaa paar hai na
                    Achhi vidya chahiye aacha khasa maal dena
                    Nall mein paani chahiye khade rehle line mein na
                    Zameen apni par note dikha kar sign lena
                    Drugs laaye ye phir dhakel denge crime mein na
                    Akela insaan phir gaadi teri chaar kyun?
                    Ghar mein hai chaar phir rooms tere 8 kyun?
                    Paison se nahin bante kudrat se hum khaas kyun?
                    Teri pidhi ka soch wo kaise lenge saans kyun?
                    (Shoooo...) (Kya shoo...)
                    Ek tarfa tarazu
                    (Kya shoo...)
                    (Aa) teri hansi mere aansu
                    (Kya shoo...)
                    (Aa) ghut ghut ke kyun saans loon?
                    (Kya shoo...)
                    Use dega kya hisaab tu?
                    
                    [Chorus:]
                    Ho tera pinjra mein jaal ni khana
                    Parindeya ne udd jaana tera pinjra
                    Tera mukk jaana sara lana baana
                    Parindeya ne udd jaana tera pinjra
                    
                    [Verse 2: Divine]
                    (Aa) Nahi banna mujhe Slumdog Millionaire
                    Ye slumdog hai mission pe
                    System ke keede jo rengte apne kafan pe
                    Bachpan se choora rakha hai inhone apne gardan pe
                    Pustak mein ye likh te galat
                    Seekhte galat
                    Chinkte halak
                    Par kisi ko parwah nahi
                    Ye shaitaan hai insan nahi
                    Dharam ke naam pe kaam wahi
                    Dharam banaya insan ne hi
                    Paiso ke liye ye tha sabhi
                    Dimag lada kar jaan kabhi
                    Dhangse laga tu kaan kabhi
                    Istemaal kar tu zabaan kabhi
                    Andheka kyun hai shaan ke bhi
                    Andheka kyun hai jaan ke bhi
                    Sachchai mein tu sama kabhi
                    Aachai se tu kama kabhi
                    Is gandh ko karna saaf abhi
                    Is gandh ko karna saaf abhi
                    Is gandh ko karna saaf abhi
                    
                    (Ab Kya shoo)
                    Ek tarfa tarazu
                    (Kya shoo)
                    (Aa) teri hansi mere aansu
                    (Kya shoo)
                    (Aa) ghut ghut ke kyun saans loon
                    (Kya shoo)
                    Use dega kya hisaab tu haan?
                    
                    [Outro: Divine]
                    Haan oh bolo aazadi
                    Oh bolo aazadi
                    (oh bolo aazadi)
                    Oh bolo aazadi
                    (oh bolo aazadi)
                    Oh bolo aazadi
                    (oh bolo aazadi)
                    Give Me Freedom
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