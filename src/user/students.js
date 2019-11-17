import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Header from '../shared/header.js';
import Dashboard from '../dashboard/dashboard.js';
import Addition from '../addition/addition.js';

const Student = (props) => (
    <Switch>
        <Route exact path='/student' component={() => <Dashboard user={props.user} />}/>
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
        {
            //<Route path='/student/subtraction' component={() => <Addition />}/>
        }
    </Switch>
);

export default Student;
