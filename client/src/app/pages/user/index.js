import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import {
    withStyles, 
    Typography,
    Grid,
} from '@material-ui/core';

import API from '../../../services/api';
import { PageContainer } from '../../../components';
import styles from './styles';

class User extends React.Component {
    state = {
        loading: true,
    };
    
    componentDidMount() {
        
        API.get('blogs/')
            .then(response => {
                const { status, list } = response.data;

                // Take the top 3 latest ones.
                const latestArticles = list.sort(this.sortByDate).slice(0, 3);

                this.setState({
                    loading: false,
                    articles: latestArticles,
                });
            })
            .catch(console.error);
    }


    render() {
        const { classes } = this.props;

        const { loading } = this.state;

        return (
            <PageContainer loading={loading}>
                <Typography>User Page</Typography>
            </PageContainer>
        )
    }
}

export default withStyles(styles)(User);