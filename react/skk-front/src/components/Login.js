import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';
import '../styles/Login.css';
import axios from 'axios';
import history from '../history';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    async login(email, password) {
        const resp = await axios.post('http://localhost:3000/auth/login', {
            email, password
        }).catch(error => {
            alert('Bad credentials');
        });
        if (resp && resp.status === 200) {
            localStorage.setItem('token', resp.data.auth_token);
            localStorage.setItem('user', resp.data.user); // not quite safe
            history.push('/');
        }
    }

    render() {
        return (
            <div className="all">
                <Form horizontal className="login">
                    <FormGroup controlId="formHorizontalEmail" >
                        <Col sm={10}>
                            <FormControl
                                type="email"
                                placeholder="Email"
                                inputRef={ref => { this.email = ref; }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col sm={10}>
                            <FormControl
                                type="password"
                                placeholder="Password"
                                inputRef={ref => { this.password = ref; }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={() => this.login(this.email.value, this.password.value)}>Log in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;