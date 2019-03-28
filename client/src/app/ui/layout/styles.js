export default theme => ({
    root: {
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.body,
    },
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
    },
    appbar: {
        position: 'fixed',
        top: 0,
        left: 0,
    },
    main: {
        display: 'flex',
        flexGrow: 2,
        marginTop: 64,

        [theme.breakpoints.down('xs')]: {
            marginTop: 56,
        }
    },
    footer: {
        
    },
})