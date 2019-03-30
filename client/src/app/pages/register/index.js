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
    MenuItem,
} from '@material-ui/core';
import axios from 'axios';

import API from '../../../services/api';
import { PageContainer } from '../../../components';
import styles from './styles';

// import Logo from "../../../../assets/images/logo.svg";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

class Register extends React.Component {
    state = {
        loading: true,
        credentials: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            gender: { value: '', list: [] },
            region: { value: '', list: [] },
        },
    };

    register = (event) => {
        event.preventDefault();
        const errorSwal = withReactContent(Swal);

        const required = [];

        if (!this.state.credentials.username.length)
            required.push('Username');

        if (!this.state.credentials.email.length)
            required.push('Email');

        if (!this.state.credentials.name.length)
            required.push('Name');

        if (!this.state.credentials.password.length)
            required.push('Password');

        if (!this.state.credentials.confirmPassword.length)
            required.push('Confirm Password');

        if (!this.state.credentials.gender.value.length)
            required.push('Gender');

        if (!this.state.credentials.region.value.length)
            required.push('Region');

        if (required.length) {
            let text = '';
            for (let i=0;i<required.length-1;i++)
                text += required[i] + ', ';
            
            text += required[required.length-1];
            errorSwal.fire({
                type: 'warning',
                title: 'Empty Fields',
                text
            });
        }
        else if (this.state.credentials.password != this.state.credentials.confirmPassword) 
            errorSwal.fire({
                type: 'error',
                title: 'Password Mismatch',
                text: 'Both passwords should match !!',
            });
        else {
            let data = {
                gender: this.state.credentials.gender.list.find(each => each.gender_id == this.state.credentials.gender.value),
                region: this.state.credentials.region.list.find(each => each.region_id == this.state.credentials.region.value),
                password: this.state.credentials.password,
                username: this.state.credentials.username,
                email: this.state.credentials.email,
                name: this.state.credentials.name,
            };

            this.setState({ loading: true });

            API.get('send_code/', {
                params: { email: this.state.credentials.email }
            }).then(response => {
                this.setState({ loading: false });
                const otpSwal = withReactContent(Swal);
                const successSwal = withReactContent(Swal);

                let timerInterval;
                
                otpSwal.fire({
                    title: 'Enter Verification Code',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    html: 'Dialog Box will close in <strong></strong> secs.',
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    showLoaderOnConfirm: true,
                    timer: 30000,
                    onBeforeOpen: () => {
                        timerInterval = setInterval(() => {
                            Swal.getContent().querySelector('strong')
                                .textContent = Math.round(Swal.getTimerLeft()/1000.0)
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    },
                    preConfirm: (code) => {
                        return API.post('verify_code/', { email: this.state.credentials.email, code })
                            .then(response => {
                                this.setState({ loading: true });
                                if (response.data.status == 'VERIFICATION FAILURE')
                                    errorSwal.fire({ type: 'error', title: 'Incorrect Code !!', text: 'Retry Again' })
                                else 
                                    API.post('registration/', data).then(response => {
                                        this.setState({ loading: false });
                                        if (response.data.status == 'SUCCESS') {
                                            this.setState({ 
                                                credentials: {     //to counter onBlur check again (button click)
                                                    ...this.state.credentials,
                                                    username: ''
                                                } 
                                            });
                                            successSwal.fire({
                                                type: 'success',
                                                text: 'Registration Successful!!',
                                                timer: 3000,
                                            }).then(ok => this.props.history.push('/home'));
                                            setTimeout(() => {
                                                this.props.history.push('/home')
                                            }, 3000);
                                        }
                                        else
                                            errorSwal.fire({ type: 'error', title: 'Some Error Occured !!', text: 'Retry Registration', timer: 3000 })
                                    }).catch(error => errorSwal.fire({ type: 'error', title: 'Some Error Occured !!', text: 'Retry Registration', timer: 3000 }))
                            })
                            .catch(error => errorSwal.fire({ type: 'error', title: 'Error Occured !!', text: 'Retry Registration', timer: 3000 }))
                    },
                })            
            }).catch(error => errorSwal.fire({ type: 'error', title: 'Error Occured !!', text: 'Retry Registration', timer: 3000 }));
        }
    }

    handleText = name => event => this.setState({
        credentials: {
            ...this.state.credentials,
            [name]: event.target.value
        }
    });

    handleDropDown = name => event => this.setState({
        credentials: {
            ...this.state.credentials,
            [name]: {
                ...this.state.credentials[name],
                value: event.target.value
            }
        }
    })

    checkAvailable = () => {
        const { username } = this.state.credentials;
        const errorSwal = withReactContent(Swal);

        if (username.length) {
            API.get('username_available/', {
                params: { username }
            }).then(response => {
                if (response.data.status == 'ALREADY EXISTS') {
                    errorSwal.fire({
                        type: 'error',
                        title: 'Username Not Available',
                        text: 'Please fill in a different username',
                        timer: 3000,
                    });
                    this.setState({
                        credentials: {
                            ...this.state.credentials,
                            username: ''
                        }
                    });
                }
            })
            .catch(error => console.log(error));
        }
    }

    componentDidMount() {
        axios.all([
            API.get('genders/'),
            API.get('regions/'),
        ]).then(axios.spread((gender_, region_) => this.setState({
            loading: false, 
            credentials: {
                ...this.state.credentials,
                gender: {
                    ...this.state.credentials.gender,
                    list: gender_.data.list
                },
                region: {
                    ...this.state.credentials.region,
                    list: region_.data.list
                }
            }
        }))).catch(error => console.log(error));
    }

    render() {
        const { classes } = this.props;

        const { loading, credentials } = this.state;

        return (
            <PageContainer className={classes.container} loading={loading}>
                {!loading && 
                    <Paper className={classes.formContainer}>
                        <div className={classes.formWrapper}>
                            <Typography variant="h6" className={classes.formTitle}>Register</Typography>
                            <Divider variant="middle" className={classes.formDivider} />
                            <form>
                                <TextField 
                                    onChange={this.handleText('username')} 
                                    className={classes.formControl}
                                    inputProps={{
                                        className:classes.textFieldInput,
                                    }}
                                    onBlur={this.checkAvailable}
                                    variant="outlined" 
                                    label="Username" 
                                    value={credentials.username} 
                                    autoFocus />

                                <TextField
                                    onChange={this.handleText('name')}
                                    className={classes.formControl}
                                    inputProps={{
                                        className: classes.textFieldInput,
                                    }}
                                    variant="outlined"
                                    label="Name"
                                    value={credentials.name} />

                                <TextField 
                                    onChange={this.handleText('email')} 
                                    className={classes.formControl}
                                    inputProps={{
                                        className:classes.textFieldInput,
                                    }} 
                                    variant="outlined" 
                                    label="E-mail" 
                                    value={credentials.email} />

                                <TextField 
                                    onChange={this.handleText('password')} 
                                    className={classes.formControl}
                                    inputProps={{
                                        className:classes.textFieldInput,
                                    }} 
                                    variant="outlined" 
                                    type="password" 
                                    label="Password" 
                                    value={credentials.password} />

                                <TextField 
                                    onChange={this.handleText('confirmPassword')} 
                                    className={classes.formControl}
                                    inputProps={{
                                        className:classes.textFieldInput,
                                    }} 
                                    variant="outlined" 
                                    type="password" 
                                    label="Confirm Password" 
                                    value={credentials.confirmPassword} />

                                <TextField 
                                    select
                                    variant="outlined"
                                    type="text"
                                    onChange={this.handleDropDown('gender')} 
                                    className={classes.formControl}
                                    inputProps={{
                                        className: classes.textFieldInput,
                                    }}
                                    label="Gender" 
                                    value={credentials.gender.value}
                                >
                                    {credentials.gender.list.map((each,index) => 
                                        <MenuItem key={index} value={each.gender_id}>{each.name}</MenuItem>
                                    )}
                                </TextField>    

                                <TextField 
                                    select
                                    variant="outlined" 
                                    type="text" 
                                    onChange={this.handleDropDown('region')} 
                                    className={classes.formControl}
                                    inputProps={{
                                        className:classes.textFieldInput,
                                    }}
                                    label="Region" 
                                    value={credentials.region.value}
                                >
                                    {credentials.region.list.map((each,index) => 
                                        <MenuItem key={index} value={each.region_id}>{each.name}</MenuItem>
                                    )}
                                </TextField>

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
                }
            </PageContainer>
        )
    }
}

export default withRouter(withStyles(styles)(Register));