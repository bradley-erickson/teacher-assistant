import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { checkLogin } from './helpers/database-helpers.js';
import Header from './shared/header.jsx';

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
            <div id="login" class="wrapper fadeInDown">
                <div id="formContent">
                    <i class="fa fa-graduation-cap fadeIn first" id="icon" alt="User Icon"/>
                    <form id="userForm" >
                        <input type="text" className="fadeIn second" placeholder="Name" onBlur="this.placeholder = 'Manager Id'" onfocus="this.placeholder = ''" ref={this.usernameRef} onChange={e => this.setState({ username: e.target.value })} />
                        <input type="password" className="fadeIn third" name="password" placeholder="password" onBlur="this.placeholder = 'password'" onfocus="this.placeholder = ''" ref={this.passwordRef} onChange={e => this.setState({ password: e.target.value })} />
                        <Button id="loginBtn" className="fadeIn fourth" onClick={this.login}>
                                Begin
                        </Button>
                        {redirect && <Redirect to={pushTo} />}
                    </form>

                </div>
            </div>
        );
    }
}

Login.propTypes = {
    onStart: PropTypes.func.isRequired
}

export default Login;