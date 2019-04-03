export default theme => ({
    root: {
        paddingTop: 4 * theme.spacing.unit,
    },

    sectionTitle: {
        fontSize: '1.2em',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: theme.palette.secondary.main,
    },

    aboutSection: {
        marginBottom: 4 * theme.spacing.unit,
    },
    
    aboutText: {
        width: '75%',
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '1em',
        fontStyle: 'italic',
        fontWeight: 200,

        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },

    teamSection: {
        marginBottom: 4 * theme.spacing.unit,
    },

    membersContainer: {
        width: '100%',
        margin: 0,
    },

    member: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 2 * theme.spacing.unit,
        padding: 2 * theme.spacing.unit,
        // border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 4,

        '& > *': {
            marginBottom: theme.spacing.unit,
        }
    },

    memberImage: {
        width: '75%',
        height: 'auto',
        borderRadius: '50%',
    },
    
    memberText: {
        fontSize: '1em',
        fontWeight: 200,
    },
    
    linkImage: {
        width: 24,
        height: 24,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    anchor: {
        color: '#efbb35',
        '&:hover': {
            color: '#efbb35'
        }
    }
})