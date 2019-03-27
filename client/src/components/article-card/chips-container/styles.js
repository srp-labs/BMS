export default theme => ({
    container: {
        padding: theme.spacing.unit,
    },
    chip: {
        margin: theme.spacing.unit/2,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    chipAvatar: {
        padding: 6,
    },
})