import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../shared/header.jsx';
import StudentActions from '../student/student-actions.jsx';
import TeacherActions from '../teacher/teacher-actions.jsx';
import AdminActions from '../admin/admin-actions.jsx';
import MessageSection from './message-block.jsx';

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
                            <i className="fa fa-sign-out mr-1" />
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