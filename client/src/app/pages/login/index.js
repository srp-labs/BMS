import React from 'react';
import classnames from 'classnames';
import {
    withStyles, 
    Typography,
    Grid,
} from '@material-ui/core';

import API from '../../../services/api';
import { PageContainer } from '../../../components';
import styles from './styles';

import Logo from "../../../../assets/images/logo.png";

class Home extends React.Component {
    state = {
    };

    render() {
        const { classes } = this.props;

        return (
            <PageContainer>
                The wanna be login page. But, not everyone gets what they want.
            </PageContainer>
        )
    }
}

export default withStyles(styles)(Home);