export default theme => ({
    root: {
        position: 'relative',
        // margin: 2 * theme.spacing.unit,
        padding: 2 * theme.spacing.unit,
        backgroundColor: '#FFF',
        borderRadius: 4,
        boxShadow: theme.shadows[1],
        overflow: 'hidden',
        transition: 'transform 0.25s, box-shadow 0.25s',

        '&:hover': {
            boxShadow: theme.shadows[2],
            transform: 'translateY(-4px)',
        },

        '& > *': {
            marginBottom: theme.spacing.unit,
        },
    },

    cardTitle: {
        display: 'flex',
    },
    
    articleTitle: {
        fontSize: '1.2em',
        fontWeight: 500,
        color: '#000',
        flexGrow: 2,
    },

    cardContent: {
        display: 'flex',
    },

    articleImage: {
        marginRight: 2 * theme.spacing.unit,
    },

    articleDescription: {
        fontSize: '0.9em',
        fontWeight: 200,
        color: '#000000AA',
    },

    divider: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f0598855',
    },

    metaInformation: {
        display: 'flex',
    },

    writer: {
        color: '#000',
        marginLeft: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit / 2,
    },

    date: {
        color: '#000',
        marginLeft: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit / 2,
    },

    readTime: {
        color: '#000',
        marginLeft: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit / 2,
    },

    extras: {
        color: '#000',
        marginLeft: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit / 2,
    },

    bottomHighlight: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '4px',
        width: '100%',  
        marginBottom: 0,
        backgroundColor: '#f05988',
    },
})