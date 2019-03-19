import { createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

import colors from './colors';

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
    },
    typography: {
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