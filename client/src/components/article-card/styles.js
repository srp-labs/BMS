export default theme => ({
    root: {
        position: 'relative',
        display: 'block',
        width: '100%',
        verticalAlign: 'initial',
        textAlign: 'initial',
        padding: 2 * theme.spacing.unit,
        backgroundColor: '#0A1F18',
        borderRadius: 4,
        boxShadow: theme.shadows[1],
        overflow: 'hidden',
        transition: 'box-shadow 0.25s',

        '&:hover': {
            boxShadow: theme.shadows[10],
        },

        '& > *': {
            marginBottom: theme.spacing.unit,
        },
    },

    cardTitle: {
        display: 'flex',
        color: '#FFF',
    },
    
    articleTitle: {
        fontSize: '1.2em',
        fontWeight: 500,
        flexGrow: 2,
        width: 0, // Unknown result....
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    cardContent: {
        display: 'flex',
    },

    articleImage: {
        width: '100%',
        minHeight: 100,
        alignSelf: 'center',
        // marginRight: 2 * theme.spacing.unit,
    },

    articleDescription: {
        fontSize: '0.9em',
        fontWeight: 200,
        wordSpacing: '1px',
        lineHeight: '200%',
    },

    divider: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.primary.main,
    },

    metaInformation: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#cacaca',

        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-around',
        }

    },

    metaText: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 200,
        marginLeft: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit,

        '& > svg': {
            marginRight: theme.spacing.unit / 2,
        },
    },

    bottomHighlight: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '4px',
        width: '100%',  
        marginBottom: 0,
        backgroundColor: theme.palette.primary.main,
    },
})