export default theme => ({
    root: {
        position: 'relative',
        marginLeft: 2 * theme.spacing.unit,
        marginRight: 2 * theme.spacing.unit,
        fontSize: '1.1em',
        fontWeight: 300,
        textDecoration: 'none',
        textTransform: 'uppercase',
        cursor: 'pointer',
        
        '&:after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: -theme.spacing.unit / 2,
            width: '80%',
            height: 2,
            backgroundColor: theme.palette.getContrastText('#008f68'),
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
    noUnderline: {
        '&.active': {
            cursor: 'initial',
            
            '&:after': {
                transform: 'translate(-50%, 0%)',
                opacity: 0,
            },
        },

        '&:hover:after': {
            opacity: 0,
        },
    },
    text: {
        display: 'inline',
        color: theme.palette.getContrastText('#008f68'),
        
        '&:not(:last-child)': {
            marginRight: theme.spacing.unit,
        }
    },
});