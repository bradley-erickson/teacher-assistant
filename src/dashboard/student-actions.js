import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const StudentActions = () => {
    return (
        <div>
            <Link to="/student/addition">
                <Button>
                    Addition
                </Button>
            </Link>
            <Link to="/student/subtraction">
                <Button>
                    Subtraction
                </Button>
            </Link>
        </div>
    );
}

export default StudentActions;