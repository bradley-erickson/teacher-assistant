import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const StudentActions = () => {
    return (
        <div>
            <Link to="/student/addition">
                <Button id="addition-button" className="addition-button">
                    <i className="fa fa-plus mr-1" />
                    Addition
                </Button>
            </Link>
            <Link to="/student/subtraction">
                <Button id="subtraction-button" className="subtraction-button">
                    <i className="fa fa-minus mr-1" />
                    Subtraction
                </Button>
            </Link>
            <Link to="/student/scores">
                <Button id="score-button" className="score-button">
                    <i className="fa fa-star mr-1" />
                    View Scores
                </Button>
            </Link>
        </div>
    );
}

export default StudentActions;