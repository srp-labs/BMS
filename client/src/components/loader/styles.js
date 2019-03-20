export default (theme) => ({
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 2,
    },
    loadingRoot: {
        width: '40%',
    },
    loadingMessage: {
        margin: `${2*theme.spacing.unit}px auto`,
        textTransform: 'uppercase',
    },
});