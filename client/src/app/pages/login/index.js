import React from 'react';
import classnames from 'classnames';
import {
    withStyles, 
    Typography,
    Grid,
    Paper,
    Divider,
    TextField,
    Button,
} from '@material-ui/core';

import API from '../../../services/api';
import { PageContainer } from '../../../components';
import styles from './styles';

import Logo from "../../../../assets/images/logo.png";

class Login extends React.Component {
    state = {
        loading: false,
        credentials: {
            username: "",
            password: "",
        },
    };

    login = (event) => {
        event.preventDefault();
        this.setState({
            loading: true,
        });
    }

    handleForm = name => event => this.setState({
        credentials: {
            ...this.state.credentials,
            [name]: event.target.value
        }
    });

    render() {
        const { classes } = this.props;

        const { loading, credentials } = this.state;

        return (
            <PageContainer className={classes.container} loading={loading}>
                <Paper className={classes.formContainer}>
                    <img alt="IIIT-A" src={Logo} className={classes.collegeLogo} />
                    <div className={classes.formWrapper}>
                        <Typography variant="h6" className={classes.formTitle}>Login</Typography>
                        <Divider variant="middle" className={classes.formDivider} />
                        <form>
                            <TextField 
                                className={classes.formControl} 
                                variant="outlined" 
                                label="Username" 
                                value={credentials.username} 
                                onChange={this.handleForm('username')} 
                                autoFocus />
                            <TextField 
                                className={classes.formControl} 
                                variant="outlined" 
                                type="password" 
                                label="Password" 
                                value={credentials.password} 
                                onChange={this.handleForm('password')} />
                            <Button 
                                type="submit" 
                                className={classes.formControl} 
                                variant="contained" 
                                color="primary" 
                                onClick={this.login} >
                                Login
                            </Button>
                        </form>
                    </div>
                </Paper>
            </PageContainer>
        )
    }
}

export default withStyles(styles)(Login);