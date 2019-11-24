import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import SubtractionExample from './subtraction-example.jsx';
import SubtractionPractice from './subtraction-practice.jsx';
import EndModule from '../../shared/end-module.jsx';
import { getClass } from '../../helpers/database-helpers.js';

class Subtraction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: this.getDifficultyByClass(props.user)
        }
    }

    async getDifficultyByClass(user) {
        const difficulty = await getClass(user.info.classID);
        console.log(difficulty);
        return 11;
    }

    render() {
        const { user } = this.props;
        return (
            <Switch>
                <Route exact path='/student/subtraction' component={() => <SubtractionExample/>}/>
                <Route path='/student/subtraction/practice' component={() => <SubtractionPractice difficulty={11} user={user} />}/>
                <Route path='/student/subtraction/submit' component={() => <EndModule name={user.info.fname} moduleType="subtraction" />}/>
            </Switch>
        );
    }
}

Subtraction.propTypes = {
    user: PropTypes.object.isRequired
}

export default Subtraction;