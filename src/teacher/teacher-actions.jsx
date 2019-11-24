import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const TeacherActions = () => {
    return (
        <div>
            <Link to="/student/scores">
                <Button>
                    <i className="fa fa-star mr-1" />
                    View Scores
                </Button>
            </Link>
        </div>
    );
};

export default TeacherActions;