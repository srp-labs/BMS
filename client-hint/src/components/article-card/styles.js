export default theme => ({
    root: {
        position: 'relative',
        display: 'block',
        width: '100%',
        verticalAlign: 'initial',
        textAlign: 'initial',
        padding: 2 * theme.spacing.unit,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: 4,
        boxShadow: theme.shadows[1],
        overflow: 'hidden',
        transition: 'box-shadow 0.25s',

        '&:hover': {
            boxShadow: theme.shadows[10],
        },
    },

    childMargins: {
        '& > *': {
            marginBottom: theme.spacing.unit,
        },
    },

    cardHeaderRoot: {
        padding: theme.spacing.unit,
        paddingBottom: 0,
    },

    cardHeaderContent: {
        width: '100%',
    },

    cardHeaderTitle: {
        fontSize: '1.2em',
        fontWeight: 500,
        flexGrow: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    cardHeaderSubHeader: {
        color: theme.palette.secondary.main,
        paddingTop: theme.spacing.unit/2,
        fontSize: '1em',
    },

    articleTitle: {
        fontSize: '1.2em',
        fontWeight: 500,
        flexGrow: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    cardContent: {
        display: 'flex',
    },

    articleImageWrapper: {
        position: 'relative',
        width: '100%',
        height: 160,
        alignSelf: 'center',
        overflow: 'hidden',
    },

    articleImage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        transform: 'translate(-50%, -50%)'
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
        backgroundColor: theme.palette.secondary.main,
    },

    metaInformation: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#cacaca',

        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
        }

    },

    metaText: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 200,
        height: 32,
        marginLeft: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit,

        '& > svg': {
            marginRight: theme.spacing.unit / 2,
        },
    },

    ratingIcon: {

    },

    bottomHighlight: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '4px',
        width: '100%',  
        marginBottom: 0,
        backgroundColor: theme.palette.secondary.main,
    },
})