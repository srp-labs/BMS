import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './theme';
import Layout from './layout';


class UI extends React.Component {
    render() {
        return (
            <Router>
                <ThemeProvider>
                    <Layout />
                </ThemeProvider>
            </Router>
        )
    }
}

export default UI;