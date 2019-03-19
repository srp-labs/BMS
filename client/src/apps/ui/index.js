import React from 'react';
import ThemeProvider from './theme';
import Layout from './layout';

class UI extends React.Component {
    render() {
        return (
            <ThemeProvider>
                <Layout />
            </ThemeProvider>
        )
    }
}

export default UI;