import { createMuiTheme } from '@material-ui/core'

import colors from './colors';

const fontFamily = [
    "'Raleway'",
    "'Roboto'", 
    "'Helvetica'", 
    "'Arial'", 
    "'sans-serif'",
].join(',');

export const light = createMuiTheme({
    palette: {
        primary: {
            ...colors
        },
        secondary: {
            main: '#039BE5',
        },
        background: {
            appBar: '#f5f5f5',
        },
        text: {
            primary: '#FFF',
        },
    },
    typography: {
        fontFamily: fontFamily,
        useNextVariants: true,
    },
    props: {
        MuiButton: {
            variant: "contained",
            color: "primary"
        },
    },
    overrides: {
    }
})

export const dark = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
})