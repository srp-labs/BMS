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
                'Medium': "#ff982e",
                'Advanced': "#FF5722",
            },
            // App only properties.
            type: {
                'frontend': "#0088FE",
                'backend': "#00C49F",
                'setup': "#FFBB28",
                'noteworthy': "#000000",
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
        MuiMenuItem: {
            style: {
                color: "black",
            },
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