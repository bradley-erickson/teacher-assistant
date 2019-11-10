import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../shared/header.js';
import StudentActions from './student-actions.js';
import TeacherActions from './teacher-actions.js';
import AdminActions from './admin-actions.js';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    getContentsByType() {
        const { user } = this.props;
        switch(user.type) {
            case 'admin':
                return <AdminActions />
            case 'teacher':
                return <TeacherActions />
            case 'student':
                return <StudentActions />
            default:
                return <div />
        };
    }

    render() {
        return (
            <div>
                <Header title="Main Menu" icon="fa-home" className="welcome-main-header">
                    <Link to="/">
                        <Button id="reset-button" className="reset-button">
                            Reset
                        </Button>
                    </Link>
                </Header>
                { this.getContentsByType() }
                <div className="body-component">
                    Hello!
                    <br />
                    What do you need help with?
                    <br />
                    <div>
                        <Link to="/addition/background">
                            <Button id="addition-button">
                                <i className="fa fa-plus"/>
                                Addition
                            </Button>
                        </Link>
                        <Link to="/subtraction/background">
                            <Button id="subtraction-button">
                                <i className="fa fa-minus"  />
                                Subtraction
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
}

export default Dashboard;