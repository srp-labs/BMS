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
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import API from '../../../services/api';
import { PageContainer } from '../../../components';
import styles from './styles';

// import Logo from "../../../../assets/images/logo.svg";

class Login extends React.Component {
    state = {
        loading: false,
        credentials: {
            username: '',
            password: '',
        },
    };

    login = (event) => {
        event.preventDefault();

        this.setState({
            loading: true,
        });

        const errorSwal = withReactContent(Swal);
        
        API.post('token-login/', { ...this.state.credentials })
        .then(response => {
            const { data } = response;
            if (data.status == 'SUCCESS') {
                data['username'] = this.state.credentials.username;
                localStorage.setItem('login-data', JSON.stringify(data));
                this.props.history.push("/home");
            }
            else 
                errorSwal.fire({
                    type: 'warning',
                    title: 'Invalid Credentials',
                    text: 'Retry Login',
                    timer: 3000
                });
        })
        .catch(error => {
            this.setState({
                loading: false,
            });
            errorSwal.fire({
                type: 'error',
                title: 'Error Occured',
                text: 'Retry Login',
                timer: 3000,
            });
        })
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
                    <img alt="IIIT-A" src={'/static/images/logo.svg'} className={classes.collegeLogo} />
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
                                autoCorrect="off" 
                                autoCapitalize="off" 
                                spellCheck="false"
                                autoFocus />
                            <TextField 
                                onChange={this.handleForm('password')} 
                                className={classes.formControl}
                                inputProps={{
                                    className:classes.textFieldInput,
                                }} 
                                variant="outlined" 
                                type="password" 
                                label="Password" 
                                value={credentials.password} 
                                autoCorrect="off" 
                                autoCapitalize="off" 
                                spellCheck="false" />
                            <Button 
                                type="submit" 
                                className={classes.formControl} 
                                variant="contained" 
                                color="primary" 
                                onClick={this.login} >
                                Login
                            </Button>
                        </form>
                            
                        <Link to="/register">
                            <Typography color="primary">Create New Account</Typography>
                        </Link>
                                

                    </div>
                </Paper>
            </PageContainer>
        )
    }
}

export default withRouter(withStyles(styles)(Login));