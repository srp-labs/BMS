import React from 'react';
import classnames from 'classnames';
import { withRouter, Link } from 'react-router-dom';
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

class Register extends React.Component {
    state = {
        loading: false,
        credentials: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            region: "",
        },
    };

    register = (event) => {
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
        API.post('register/', data)
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
                    <div className={classes.formWrapper}>
                        <Typography variant="h6" className={classes.formTitle}>Register</Typography>
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
                                onChange={this.handleForm('email')} 
                                className={classes.formControl}
                                inputProps={{
                                    className:classes.textFieldInput,
                                }} 
                                variant="outlined" 
                                label="E-mail" 
                                value={credentials.email} />

                            <TextField 
                                onChange={this.handleForm('password')} 
                                className={classes.formControl}
                                inputProps={{
                                    className:classes.textFieldInput,
                                }} 
                                variant="outlined" 
                                type="password" 
                                label="Password" 
                                value={credentials.password} />

                            <TextField 
                                onChange={this.handleForm('confirmPassword')} 
                                className={classes.formControl}
                                inputProps={{
                                    className:classes.textFieldInput,
                                }} 
                                variant="outlined" 
                                type="password" 
                                label="Confirm Password" 
                                value={credentials.confirmPassword} />

                            <TextField 
                                onChange={this.handleForm('gender')} 
                                className={classes.formControl}
                                inputProps={{
                                    className:classes.textFieldInput,
                                }} 
                                variant="outlined" 
                                type="password" 
                                label="Gender" 
                                value={credentials.gender} />    

                            <TextField 
                                onChange={this.handleForm('region')} 
                                className={classes.formControl}
                                inputProps={{
                                    className:classes.textFieldInput,
                                }} 
                                variant="outlined" 
                                type="password" 
                                label="Region" 
                                value={credentials.region} />
                            
                            <Button 
                                type="submit" 
                                className={classes.formControl} 
                                variant="contained" 
                                color="primary" 
                                onClick={this.register} >
                                Register
                            </Button>
                        </form>
                            
                        <Link to="/login">
                            <Typography color="primary">Have an account already?</Typography>
                        </Link>
                                

                    </div>
                </Paper>
            </PageContainer>
        )
    }
}

export default withRouter(withStyles(styles)(Register));