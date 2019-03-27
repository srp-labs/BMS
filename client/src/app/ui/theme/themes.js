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
        difficulty: {
            'Easy': "#8BC34A",
            'Medium': "#FFC107",
            'Advanced': "#FF5722",
        },
        articleType: {
            'frontend': "#03A9F4",
            'backend': "#004D40",
            'setup': "#607D8B",
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