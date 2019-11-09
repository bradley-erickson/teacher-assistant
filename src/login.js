import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { checkLogin } from './helpers/database-helpers.js';
import Header from './shared/header.js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.confirmLogin = React.createRef();
        this.login = this.login.bind(this);
        this.state = {
            username: '',
            password: '',
            pushTo: '/',
            redirect: false
        };
    }

    async login() {
        const { username, password } = this.state;
        const login = await checkLogin(username, password);
        const user = login[0]
        if (user) {
            this.setState({ pushTo: `/${user.type}`, redirect: true });
            this.props.onStart(user);
        }
    }

    render() {
        const { pushTo, redirect } = this.state;
        return (
            <div>
                <Header title="Welcome" className="welcome-main-header">
                    <span style={{ width: '10px' }} />
                </Header>
                <div className="body-component">
                    Welcome to the CompuTutor!
                    <br />
                    Please Login
                    <Input placeholder="Name" ref={this.usernameRef} onChange={e => this.setState({ username: e.target.value })} />
                    <Input placeholder="Password" ref={this.passwordRef} onChange={e => this.setState({ password: e.target.value })} />
                    <Button onClick={this.login}>
                        Begin
                    </Button>
                    {redirect && <Redirect to={pushTo} />}
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    onStart: PropTypes.func.isRequired
}

export default Login;