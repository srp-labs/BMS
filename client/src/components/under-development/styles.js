export default theme => ({
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },

    image: {
        height: '40vh', 
        marginTop: '100px'
    },

    text: {
        alignSelf: 'flex-end',
        fontSize: '4em',
        fontWeight: 'bold',
        textIndent: '-140px',
        
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
            alignSelf: 'center',
            textIndent: 0,
        },
    },
});