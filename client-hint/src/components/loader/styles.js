export default (theme) => ({
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 2,
    },
    loadingRoot: {
        width: '16%',
        minWidth: 160,
        maxWidth: 320,
    },
    loadingMessage: {
        margin: `${2*theme.spacing.unit}px auto`,
        textTransform: 'uppercase',
    },
});