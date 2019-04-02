import React from 'react';
import { withStyles } from '@material-ui/core';

import Appbar from './appbar';
import Footer from './footer';
import Main from './main';

import styles from './styles';

export default withStyles(styles)(({ classes, children }) => (
    <div>
        <Appbar />
        
        <Main>
            {children}
        </Main>
        <Footer />
    </div>
))