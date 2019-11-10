import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard.js';

const Student = (props) => (
    <Switch>
        <Route exact path='/student' component={() => <Dashboard user={props.user} />}/>
    </Switch>
);

export default Student;
