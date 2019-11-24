import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import AdditionExample from './addition-example.jsx';
import AdditionPractice from './addition-practice.jsx';
import EndModule from '../shared/end-module.js';
import { getClass } from '../helpers/database-helpers.js';

class Addition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: this.getDifficultyByClass(props.user)
        }
    }

    async getDifficultyByClass(user) {
        const difficulty = await getClass(user.info.classID);
        return 11;
    }

    render() {
        const { user } = this.props;
        return (
            <Switch>
                <Route exact path='/student/addition' component={() => <AdditionExample/>}/>
                <Route path='/student/addition/practice' component={() => <AdditionPractice difficulty={11} user={user} />}/>
                <Route path='/student/addition/submit' component={() => <EndModule name={user.info.fname} moduleType="addition" />}/>
            </Switch>
        );
    }
}

Addition.propTypes = {
    user: PropTypes.object.isRequired
}

export default Addition;