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
        primary: colors.primary,
        secondary: colors.secondary,
        text: {
            primary: '#FFF',
        },
        
        // App only properties.
        background: {
            body: '#222831',
            appBar: '#F5F5F5',

            appBarGradient: 'linear-gradient(to right, #302e24, #28313e)',
        },

        // App only properties.
        articleColors: {
            difficulty: {
                'Easy': '8BC34A',
                'Medium': '#FF982E',
                'Advanced': '#FF5722',
            },
            type: {
                'frontend': '#0088FE',
                'backend': '#00C49F',
                'setup': '#FFBB28',
                'noteworthy': '#000000',
            },
        }
    },
    typography: {
        fontFamily: fontFamily,
        useNextVariants: true,
    },
    props: {
        MuiButton: {
            variant: 'contained',
            color: 'primary'
        },
        MuiMenuItem: {
            style: {
                color: 'black',
            },
        },
    },
});