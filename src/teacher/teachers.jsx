import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Header from '../shared/header.jsx';
import Dashboard from '../dashboard/dashboard.jsx';
import ClassScores from './class-scores.jsx';

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
                <ClassScores user={props.user} />
            </div>
        }/>
        {
            //<Route path='/student/subtraction' component={() => <Addition />}/>
        }
    </Switch>
);

export default Student;
