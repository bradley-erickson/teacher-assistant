import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Header from '../shared/header.jsx';
import Dashboard from '../dashboard/dashboard.jsx';
import ClassScores from './class-scores.jsx';

const Teacher = (props) => (
    <Switch>
        <Route exact path='/teacher' component={() => <Dashboard user={props.user} />}/>
        <Route path='/teacher/scores' component={() =>
            <div>
                <Header title="Scores" icon="fa-home" className="welcome-main-header">
                    <Link to="/teacher">
                        <Button>
                            Dashboard
                        </Button>
                    </Link>
                </Header>
                <ClassScores classId={props.user.info.classID} />
            </div>
        }/>
    </Switch>
);

export default Teacher;
