import React from 'react';
import {
    MuiThemeProvider,
} from '@material-ui/core';

import { light } from './themes';

class ThemeProvider extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={light}>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}

export default ThemeProvider;