export default theme => ({
    container: {
        '& > div': {
            marginBottom: 3 * theme.spacing.unit,
        },
    },

    userInfoSection: {
        background: theme.palette.background.appBarGradient,
        paddingTop: 200,
    },

    userInfoContent: {
        position: 'relative',
        backgroundColor: theme.palette.background.body,
        paddingTop: 'calc(120px + 8px)', // Cause of the user image.

        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },

    userImage: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: 240,
        height: 240,
        borderRadius: '50%',
        borderWidth: '16px',
        borderStyle: 'solid',
        borderColor: theme.palette.background.body,
        backgroundColor: theme.palette.background.body,
        transform: 'translate(0%, -50%)',
        transition: 'all 0.25s',
        
        [theme.breakpoints.down('md')]: {
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    
    name: {
        position: 'absolute',
        top: '0',
        left: '260px',
        fontSize: '3em',
        '-webkit-text-stroke': '2px #fff',
        transform: 'translate(0%, -100%)',
        transition: 'all 0.25s',

        [theme.breakpoints.down('md')]: {
            position: 'initial',
            transform: 'translate(0, 0)',
        },
    },

    extraTextWrapper: {
        position: 'absolute',
        top: 8,
        left: '260px',
        display: 'flex',
        transition: 'all 0.25s',
        
        [theme.breakpoints.down('md')]: {
            position: 'initial',
            flexDirection: 'column',
        },
    },

    extra: {
        fontWeight: 'bold',
        color: '#d8d8d8',
        margin: theme.spacing.unit,
        transition: 'all 0.25s',
        
        [theme.breakpoints.down('md')]: {
            margin: 0,
        },
    },

    badges: {
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        transition: 'all 0.25s',
        
        [theme.breakpoints.down('md')]: {
            position: 'initial',
        },
    },

    badge: {
        width: 60,
        height: 60,
        margin: theme.spacing.unit,
        transition: 'all 0.25s',
        
        [theme.breakpoints.down('md')]: {
            width: 80,
            height: 80,
            margin: 2 * theme.spacing.unit,
        },
    },

    progressSection: {
        padding: theme.spacing.unit,
        paddingLeft: 80,
        paddingRight: 80,
        transition: 'all 0.25s',

        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
        },
    },

    progressMessage: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '& > p': {
            fontSize: '1.2em',
        },
    },

    articleReadCount: {
        fontSize: '2em',
        fontWeight: 'bold',
    },

    progressRoot: {
        display: 'block',
        width: '100%',
        height: 8,
        borderRadius: 4,
        margin: '0 auto',
    },

    progressBarColorPrimary: {
        background: '#DCE35B', 
        background: '-webkit-linear-gradient(to right, #DCE35B, #45B649)', 
        background: 'linear-gradient(to right, #DCE35B, #45B649)', 
    },

})