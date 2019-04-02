import React from 'react';

import ThemeProvider from './theme';
import Layout from './layout';

export default ({ children }) => (
    <ThemeProvider>
        <Layout>
            {children}
        </Layout>
    </ThemeProvider>
);