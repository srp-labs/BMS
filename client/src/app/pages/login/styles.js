export default theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 360,
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 4,
        transition: 'all 0.25s',

        '& > *': {
            margin: 3*theme.spacing.unit
        },
        
        [theme.breakpoints.up('md')]: {
            width: 480,
        },

        // [theme.breakpoints.down('sm')]: {
        //     minHeight: '50vh',
        //     '& > *': {
        //         margin: theme.spacing.unit
        //     }
        // },
    },

    formTitle: {
        textTransform: 'uppercase',
        color: theme.palette.primary.dark,
        fontWeight: 'bold',
    },
    
    formDivider: {
        width: '50%',
        height: '2px',
        backgroundColor: theme.palette.primary.dark,
        margin: `${2*theme.spacing.unit}px auto`,
    },
    
    formControl: {
        width: '100%',
        margin: `${2*theme.spacing.unit}px auto`,

        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },

    collegeLogo: {
        height: 150,
        width: 150,

        [theme.breakpoints.down('sm')]: {
            height: 80,
            width: 80,
        }
    },
    
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    
    softwareLogo: {
        height: 200,
        widht: 200
    }
})