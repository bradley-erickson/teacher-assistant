import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { names } from '../constants/names.js';
import { items } from '../constants/items.js';

function createQuestions(num, difficulty) {
    let questions = [];
    
    for (let i = 0; i < num; i++) {
        const ran1 = Math.floor(Math.random() * difficulty) + 1;
        const ran2 = Math.floor(Math.random() * difficulty);
        questions[i] = [Math.max(ran1, ran2), Math.min(ran1, ran2)];
    }
    return questions;
}

class SubtractionPractice extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
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
        const num3 = parseInt(questions[question][2], 10);
        if (num3) {
            const num1 = questions[question][0];
            const num2 = questions[question][1];
            return (num1 - num2 === num3);
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

    nextPage() {
        this.props.click('end', this.state.submissions);
    }

    renderQuestion(num, basic) {
        const { questions, correct, submissions, name, item } = this.state
        const submitted = submissions > 0;
        let text;
        if (basic) {
            text = `${questions[num][0]} - ${questions[num][1]} = `;
        } else {
            text = `${name} has ${questions[4][0]} ${item}. They lose ${questions[4][1]}. How many ${item} does ${name} have now? `
        }
        return (
            <div className="top-margin">
                {text}
                <Input className="practice-input" onChange={e => this.updateQuestionAnswer(num, e.target.value)}/>
                {submitted &&
                    <i className={correct[num] ? "left-margin fa fa-check color-correct-green" : "left-margin fa fa-times color-wrong-red"} />
                }
            </div>
        );
    }

    render() {
        const { correct, submissions } = this.state;
        const submitted = submissions > 0;
        return (    
            <div>
                <div>
                    <b className="body-header">Practice:</b>
                    <br />
                    {this.renderQuestion(0, true)}
                    {this.renderQuestion(1, true)}
                    {this.renderQuestion(2, true)}
                    {this.renderQuestion(3, true)}
                    {this.renderQuestion(4, false)}
                </div>
                <Button onClick={this.checkAnswer} className="right-margin top-margin">
                    Submit
                </Button>
                <Link to="/subtraction/end">
                    <Button disabled={!correct.every(v => v === true)} onClick={this.nextPage}>
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

SubtractionPractice.propTypes = {
    click: PropTypes.func.isRequired,
    difficulty: PropTypes.number.isRequired
}

export default SubtractionPractice;