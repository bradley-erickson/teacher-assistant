import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getStudentScores } from '../helpers/database-helpers';
import Score from '../shared/score.jsx';

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
        this.setState({ scores: response[0].scores });
    }

    render() {
        const { scores } = this.state;
        return (
            <div>
                Scores Below!
                {scores.map(score => (<Score score={score} key={score._id} />))}
            </div>
        );
    }
}

StudentScores.propTypes = {
    user: PropTypes.object.isRequired
}

export default StudentScores;