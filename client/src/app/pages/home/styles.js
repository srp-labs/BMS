export default theme => ({
    bannerSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        background: `linear-gradient(to right, rgba(107,183,86,0.95), 
                            rgba(0,143,104,0.95))`,
        clipPath: 'polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)',
        transition: 'clip-path 0.25s',
        willChange: 'clip-path',
        
        [theme.breakpoints.down('sm')]: {
            clipPath: 'polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)',
        },
    },

    bannerImage: {
        width: 180,
        margin: 2 * theme.spacing.unit,
        transition: 'width 0.25s, height 0.25s, margin 0.25s',
        
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing.unit,
            width: 140,
        },
        
        [theme.breakpoints.down('sm')]: {
            width: 120,
        },
    },

    bannerText: {
        fontSize: '1.5em',
        fontWeight: 100,
        fontStyle: 'italic',
        textAlign: 'center',
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

    latestArticlesTitle: {
        fontSize: '1.2em',
        textAlign: 'center',
        textTransform: 'uppercase',
    },

    cardContainer: {
        width: '100%',
        margin: `${2 * theme.spacing.unit}px 0`,
    },
})