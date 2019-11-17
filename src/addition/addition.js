import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AdditionBackground from './addition-background.js';
import AdditionExample from './addition-example.js';
import AdditionPractice from './addition-practice.js';
import EndModule from '../shared/end-module.js';

class Addition extends Component {
    constructor(props) {
        super(props);
        this.increaseDifficulty = this.increaseDifficulty.bind(this);
        this.state = {
            difficulty: 11
        };
    }

    increaseDifficulty() {
        const difficulty = (this.state.difficulty - 1) * 10 + 1;
        this.setState({ difficulty })
    }

    render() {
        const { user } = this.props;
        const { difficulty, submission } = this.state;
        return (
            <Switch>
                <Route exact path='/student/addition' component={() => <AdditionBackground/>}/>
                <Route path='/student/addition/example' component={() => <AdditionExample/>}/>
                <Route path='/student/addition/practice' component={() => <AdditionPractice difficulty={difficulty} />}/>
                <Route path='/student/addition/submit' component={() => <EndModule name={user.info.fname} moduleType="addition" submission={submission} increaseDifficulty={this.increaseDifficulty} />}/>
            </Switch>
        );
    }
}

export default Addition;