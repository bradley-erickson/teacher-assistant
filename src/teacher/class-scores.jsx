import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getStudentScores, getStudents } from '../helpers/database-helpers';
import Score from '../shared/score.jsx';

class ClassScores extends Component {
    constructor(props) {
        super(props);
        this.fetchStudentScore = this.fetchStudentScore.bind(this);
        this.state = {
            scores: [],
            students: [],
            ready: true
        }
    }

    async componentDidMount() {
        const { classId } = this.props;
        const response = await getStudents(classId);
        this.setState({ students: response[0].students });
    }

    async fetchStudentScore(student) {
        const score = await getStudentScores(student._id);
        this.setState({ scores: this.state.scores.concat(score[0].scores) });
    }


    render() {
        const { students, scores, ready } = this.state;
        if (ready) {
            let student = students.pop();
            if (student) {
                this.fetchStudentScore(student);
            }
        }
        return (
            <div>
                Scores Below!
                {scores.map(score => (<Score key={score._id} score={score} />))}
            </div>
        );
    }
}

ClassScores.propTypes = {
    classId: PropTypes.number.isRequired
}

export default ClassScores;