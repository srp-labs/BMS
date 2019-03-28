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
            ...colors.primary,
        },
        secondary: {
            ...colors.secondary,
        },
        background: {
            body: '#222831',
            appBar: '#f5f5f5',
            // App only properties.
            appBarGradient: 'linear-gradient(to right, #302e24, #28313e)',
        },
        text: {
            primary: '#FFF',
        },

        // App only properties.
        articleColors: {
            // App only properties.
            difficulty: {
                'Easy': "#8BC34A",
                'Medium': "#FFC107",
                'Advanced': "#FF5722",
            },
            // App only properties.
            type: {
                'frontend': "#03A9F4",
                'backend': "#004D40",
                'setup': "#607D8B",
                noteworthy: "#000000",
            },
        }
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