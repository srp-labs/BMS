export default theme => ({
    root: {
        paddingTop: 4 * theme.spacing.unit,
    },

    sectionTitle: {
        fontSize: '1.2em',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    
    cardContainer: {
        width: 'calc(100% - 32px)',
        margin: 2 * theme.spacing.unit,
    },
});