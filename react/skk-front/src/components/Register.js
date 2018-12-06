import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../styles/Login.css';
import axios from 'axios';
import history from '../history';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    async register(e, p, pc) {
        const resp = await axios.post('http://localhost:3000/signup', {
            'email': e, 'password': p, 'password_confirmation': pc
        }).catch(error => {
            alert('Bad data');
        });
        if (resp && resp.status === 201) {
            history.push('/login');
        }
    }


    render() {
        return (
            <div>
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

                        <FormGroup controlId="formHorizontalPassword" >
                            <Col sm={10}>
                                <FormControl
                                    type="password"
                                    placeholder="Confirm password"
                                    inputRef={ref => { this.passwordCnf = ref }}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button onClick={() =>
                                    this.register(this.email.value, this.password.value, this.passwordCnf.value)}>
                                    Register
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Register;