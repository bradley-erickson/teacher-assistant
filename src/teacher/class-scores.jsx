import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getStudentScores, getStudents } from '../helpers/database-helpers';
import TScores from './classscores.jsx';

class ClassScores extends Component {
    constructor(props) {
        super(props);
        this.fetchStudents = this.fetchStudents.bind(this);
        this.state = {
            scores:[]
        }
    }

    componentDidMount() {
        this.fetchStudents();
    }

    async fetchStudents() {
        const {user} = this.props;
        const students = await getStudents(user.info.classID);
        const scores = await fetchScores(students);
        console.log(scores);
        scores.forEach((n)=>{
            console.log(n);
        });
    }


    render() {

        return (
            <div>
                Scores Below!
                
            </div>
        );
    }
}

async function fetchScores(students){

    let studentTotal = [];
    let counter = 0;

    students[0].students.forEach(async (n)=>{

        let response = await getStudentScores(n._id);

        let student = {
            fname:n.fname,
            scores:response[0]
        };

        studentTotal[counter++] = student;
    });
    console.log(studentTotal);
    return studentTotal;
}

ClassScores.propTypes = {
    user: PropTypes.object.isRequired
}

export default ClassScores;