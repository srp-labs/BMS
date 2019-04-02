import React from 'react';
import {
    MuiThemeProvider,
} from '@material-ui/core';

import { light } from './themes';

export default ({ children }) => (
    <MuiThemeProvider theme={light}>
        {children}
    </MuiThemeProvider>
);