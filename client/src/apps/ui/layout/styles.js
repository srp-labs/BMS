export default theme => ({
    root: {
        position: 'relative',
        height: '100vh',
    },
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
    },
    appbar: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    main: {
        flexGrow: 2,
        marginTop: 64,

        [theme.breakpoints.down('xs')]: {
            marginTop: 56,
        }
    },
    footer: {
        
    },
})