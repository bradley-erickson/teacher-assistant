import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getStudentScores } from '../helpers/database-helpers';
import SScores from './studentscores.jsx';

class StudentScores extends Component {
    constructor(props) {
        super(props);
        this.fetchScores = this.fetchScores.bind(this);
        this.state = {
            scores: []
        }
    }

    componentDidMount() {
        this.fetchScores();
    }

    async fetchScores() {
        const { user } = this.props;
        const response = await getStudentScores(user.info._id);
        this.setState({scores: response[0].scores});
    }

    render() {
        const { scores } = this.state;
        return (
            <div>
                Scores Below!
                {scores.map(score => (<SScores module={score.module} attempts={score.attempts} total={score.total} correct={score.correct} dateStamp={score.dateStamp} key={score._id} />))}
            </div>
        );
    }
}

StudentScores.propTypes = {
    user: PropTypes.object.isRequired
}

export default StudentScores;