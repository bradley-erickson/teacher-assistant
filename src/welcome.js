import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from './shared/header.js'

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onStart = this.onStart.bind(this);
        this.state = {
            studentName: ''
        };
    }

    onStart() {
        this.props.onStart(this.state.studentName);
    }

    render() {
        return (
            <div>
                <Header title="Welcome" className="welcome-main-header">
                    <span style={{ width: '10px' }} />
                </Header>
                <div className="body-component">
                    This is the Math Teacher Assistant!
                    <br />
                    Please input your name and click 'Begin'
                    <br />
                    <Input className="top-margin bottom-margin" placeholder="Name" ref={this.inputRef} onChange={e => this.setState({ studentName: e.target.value })}/>
                    <br />
                    <Link to="/menu">
                        <Button onClick={this.onStart}>
                            Begin
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

WelcomeScreen.propTypes = {
    onStart: PropTypes.func.isRequired
}

export default WelcomeScreen;