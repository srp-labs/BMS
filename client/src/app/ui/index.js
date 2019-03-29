import React from 'react';
import ThemeProvider from './theme';
import Layout from './layout';

class UI extends React.Component {
    render() {
        const { children } = this.props;
        
        return (
            <ThemeProvider>
                <Layout>
                    {children}
                </Layout>
            </ThemeProvider>
        )
    }
}

export default UI;