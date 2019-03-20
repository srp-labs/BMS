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
    
})