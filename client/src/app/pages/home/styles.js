export default theme => ({
    bannerSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        minHeight: '640px',
        background: theme.palette.background.appBarGradient,
        clipPath: 'polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)',
        transition: 'clip-path 0.25s',
        willChange: 'clip-path',
        
        [theme.breakpoints.down('sm')]: {
            clipPath: 'polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)',
        },
    },

    bannerImagesContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    bannerImage: {
        width: 400,
        margin: 2 * theme.spacing.unit,
        transition: 'width 0.25s, height 0.25s, margin 0.25s',
        
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing.unit,
            width: 320,
        },
        
        [theme.breakpoints.down('sm')]: {
            width: 280,
        },
    },

    bannerSideImage: {
        width: 400,
        margin: 2 * theme.spacing.unit,
        transition: 'width 0.25s, height 0.25s, margin 0.25s',
        
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing.unit,
            width: 320,
        },
        
        [theme.breakpoints.down('sm')]: {
            width: 280,
        },
    },

    bannerText: {
        fontSize: '1.2em',
        fontWeight: 100,
        fontStyle: 'italic',
        textAlign: 'center',
        
        [theme.breakpoints.down('md')]: {
            fontSize: '1em',
        },
        
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
        },
    },

    latestArticlesSection: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 4 * theme.spacing.unit,
        padding: 2 * theme.spacing.unit,
        
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing.unit,
        },
    },

    sectionTitle: {
        fontSize: '1.2em',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: theme.palette.secondary.main,
    },

    cardContainer: {
        width: '100%',
        margin: `${2 * theme.spacing.unit}px 0`,
    },

    viewAllLink: {
        display: 'block',
        width: 200,
        fontWeight: 'bold',
        margin: '0 auto',
        padding: 0,

        '& a': {
            textDecoration: 'none',

            '&:active': {
                color: 'inherit',
                textDecoration: 'none',
            }
        },
    },
})