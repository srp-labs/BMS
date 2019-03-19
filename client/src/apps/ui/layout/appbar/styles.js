export default theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: theme.palette.background.appBar,
        boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.1), 
                    0px 4px 5px 0px rgba(0, 0, 0, 0.1)`,
    },
    linksContainer: {
        display: 'flex',
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        position: 'relative',
        marginLeft: 2 * theme.spacing.unit,
        marginRight: 2 * theme.spacing.unit,
        fontSize: '1.1em',
        fontWeight: 300,
        textTransform: 'uppercase',
        cursor: 'pointer',
        
        '&:after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: -theme.spacing.unit / 2,
            width: '80%',
            height: 2,
            backgroundColor: theme.palette.primary.main,
            transform: 'translate(-50%, 50%)',
            opacity: 0,
            transition: `transform 0.25s,
                        opacity 0.25s`,
        },

        '&.active': {
            cursor: 'initial',
            
            '&:after': {
                transform: 'translate(-50%, 0%)',
                opacity: 1,
            },
        },
        
        '&:hover:after': {
            transform: 'translate(-50%, 0%)',
            opacity: 1,
        },
    },
})