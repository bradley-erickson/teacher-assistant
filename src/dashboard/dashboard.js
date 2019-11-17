import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../shared/header.js';
import StudentActions from './student-actions.js';
import TeacherActions from './teacher-actions.js';
import AdminActions from './admin-actions.js';
import MessageSection from './message-block.js';

class Dashboard extends Component {
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
        const { user } = this.props;
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
                {user.info && <MessageSection classId={user.info.classID} />}
            </div>
        );
    }
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
}

export default Dashboard;