import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Header from '../shared/header.jsx';
import Dashboard from '../dashboard/dashboard.jsx';
import StudentScores from './student-scores.jsx';
import Addition from './addition/addition.jsx';
import Subtraction from './subtraction/subtraction.jsx';

const Student = (props) => (
    <Switch>
        <Route exact path='/student' component={() => <Dashboard user={props.user} />}/>
        <Route path='/student/scores' component={() =>
            <div>
                <Header title="Scores" icon="fa-home" className="welcome-main-header">
                    <Link to="/student">
                        <Button>
                            Dashboard
                        </Button>
                    </Link>
                </Header>
                <StudentScores user={props.user} />
            </div>
        }/>
        <Route path='/student/addition' component={() =>
            <div>
                <Header title="Addition" icon="fa-home" className="welcome-main-header">
                    <Link to="/student">
                        <Button>
                            Dashboard
                        </Button>
                    </Link>
                </Header>
                <Addition user={props.user} />
            </div>
        }/>
        <Route path='/student/subtraction' component={() =>
            <div>
                <Header title="Subtraction" icon="fa-home" className="welcome-main-header">
                    <Link to="/student">
                        <Button>
                            Dashboard
                        </Button>
                    </Link>
                </Header>
                <Subtraction user={props.user} />
            </div>
        }/>
    </Switch>
);

export default Student;
