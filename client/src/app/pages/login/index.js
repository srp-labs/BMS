import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router';
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

import Logo from "../../../../assets/images/logo.svg";

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
        
        let data = {
            ...this.state.credentials,
        };

        // Set loading to true.
        /* 
        this.setState({
            loading: true,
        }); 
        */

       
        // perform API query to initiate login.
        /*
        API.post('login/', data)
            .then(response => {
                // Save to localstorage.
                localStorage.setItem("username", data.username);
                localStorage.setItem("authToken", response.token); ???
                
                this.props.history.push("/redirect/home");
            })
            .catch(error => {
                this.setState({
                    loading: false,
                })
            }) 
        */ 
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
                                onChange={this.handleForm('username')} 
                                className={classes.formControl}
                                inputProps={{
                                    className:classes.textFieldInput,
                                }} 
                                variant="outlined" 
                                label="Username" 
                                value={credentials.username} 
                                autoFocus />
                            <TextField 
                                onChange={this.handleForm('username')} 
                                className={classes.formControl}
                                inputProps={{
                                    className:classes.textFieldInput,
                                }} 
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

export default withRouter(withStyles(styles)(Login));