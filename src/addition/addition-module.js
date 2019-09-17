import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../shared/header.js';
import AdditionBackground from './addition-background.js';
import AdditionExample from './addition-example.js';
import AdditionPractice from './addition-practice.js';
import EndModule from '../shared/end-module.js';



class AdditionModule extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.increaseDifficulty = this.increaseDifficulty.bind(this);
        this.state = {
            route: 'background',
            difficulty: 11,
            submission: 0,
        };
    }

    nextPage(text, submission) {
        this.setState({ route: text });
        if (submission) {
            this.setState({ submission });
        }
    }

    increaseDifficulty() {
        const difficulty = (this.state.difficulty - 1) * 10 + 1;
        this.setState({ difficulty })
    }

    render() {
        const { route, difficulty, submission } = this.state;
        let routing;
        switch (route) {
            case('example'): routing = (<AdditionExample click={this.nextPage} />); break;
            case('practice'): routing = (<AdditionPractice click={this.nextPage} difficulty={difficulty} />); break;
            case('end'): routing = (<EndModule name={this.props.name} moduleType="addition" submission={submission} click={this.nextPage} increaseDifficulty={this.increaseDifficulty} />); break;
            default: routing = (<AdditionBackground click={this.nextPage}/>); break;
        }
        return (
            <div>
                <Header title="Addition Module" icon="fa-plus" className="addition-header">
                    {route !== 'end' ?
                        <Link to="/menu">
                            <Button>
                                <i className="fa fa-home" />
                            </Button>
                        </Link>
                        :
                        <span style={{ width: '10px' }} />
                    }
                </Header>
                <div className="body-component">
                    {routing}
                </div>
            </div>
        );
    }
}

AdditionModule.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default AdditionModule;