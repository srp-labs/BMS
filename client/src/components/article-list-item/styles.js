export default theme => ({
    root: {
        position: 'relative',
        width: '100%',
        padding: `12px ${2 * theme.spacing.unit}px`,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: 4,
        borderLeft: `3px solid ${theme.palette.secondary.main}`,
        boxShadow: theme.shadows[1],
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.25s',

        '&:hover': {
            boxShadow: theme.shadows[10],
        },
    },

    secondaryColor: {
        color: 'white',
    },
})