import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { names } from '../../constants/names.js';
import { items } from '../../constants/items.js';
import { insertScore } from '../../helpers/database-helpers.js';
import { getCurrentDate } from '../../helpers/utils.js';

function createQuestions(num, difficulty) {
    let questions = [];
    for (let i = 0; i < num; i++) {
        questions[i] = [Math.floor(Math.random() * difficulty),Math.floor(Math.random() * difficulty)];
    }
    return questions;
}

class AdditionPractice extends Component {
    constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.submitScore = this.submitScore.bind(this);
        this.state = {
            questions: createQuestions(5, props.difficulty),
            correct: [false,false,false,false,false],
            name: names[Math.floor(Math.random() * names.length)],
            item: items[Math.floor(Math.random() * items.length)],
            submissions: 0
        };
    }

    updateQuestionAnswer(question, answer) {
        const { questions } = this.state;
        questions[question][2] = answer;
        this.setState({ questions });
    }

    checkQuestion(question) {
        const { questions } = this.state;
        const sum = parseInt(questions[question][2], 10);
        if (sum) {
            const num1 = questions[question][0];
            const num2 = questions[question][1];
            return (num1 + num2 === sum);
        }
        else {
            return false;
        }
    }    

    checkAnswer() {
        const { correct, submissions } = this.state;
        correct[0] = this.checkQuestion(0);
        correct[1] = this.checkQuestion(1);
        correct[2] = this.checkQuestion(2);
        correct[3] = this.checkQuestion(3);
        correct[4] = this.checkQuestion(4);
        this.setState({ correct, submissions: submissions+1 });
    }

    async submitScore() {
        const { correct, submissions } = this.state;
        const { user } = this.props;
        const date = getCurrentDate();
        const numCorrect = correct.filter(function(x){ return x === "true"; }).length;

        const data = await insertScore(user.info._id, user.info.classID, submissions, numCorrect, date);
        return data;
    }

    renderQuestion(num, basic) {
        const { questions, correct, submissions, name, item } = this.state
        const submitted = submissions > 0;
        let text;
        if (basic) {
            text = `${questions[num][0]} + ${questions[num][1]} = `;
        } else {
            text = `${name} has ${questions[4][0]} ${item}. They obtain ${questions[4][1]} more. How many ${item} does ${name} have now? `
        }
        return (
            <div>
                <form>
                    {text} 
                    <Input onChange={e => this.updateQuestionAnswer(num, e.target.value)}/>
                    {submitted &&
                        <i className={correct[num] ? "fa fa-check color-correct-green" : "fa fa-times color-wrong-red"} />
                    }
                </form>
            </div>
        );
    }

    render() {
        const { submissions } = this.state;
        const submitted = submissions > 0;
        return (    
            <div>
                <div>
                    <b className="body-header">Practice:</b>
                    <br/>
                    {this.renderQuestion(0, true)}
                    {this.renderQuestion(1, true)}
                    {this.renderQuestion(2, true)}
                    {this.renderQuestion(3, true)}
                    {this.renderQuestion(4, false)}
                </div>
                <Button id="answers-button" className="answers-button"onClick={this.checkAnswer}>
                    Check Answers
                </Button>
                <Link to="/student/addition/submit">
                    <Button id="next-button" className="next-button" onClick={this.submitScore}>
                        Next
                    </Button>
                </Link>
                {submitted &&
                    <div>
                        Total Submissions: {submissions}
                    </div>
                }
            </div>
        );
    }
};

AdditionPractice.propTypes = {
    difficulty: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
}

export default AdditionPractice;