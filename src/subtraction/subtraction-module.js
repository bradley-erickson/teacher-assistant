import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../shared/header.js';
import SubtractionBackground from './subtraction-background.js';
import SubtractionExample from './subtraction-example.js';
import SubtractionPractice from './subtraction-practice.js';
import EndModule from '../shared/end-module.js';



class SubtractionModule extends Component {
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
            case('example'): routing = (<SubtractionExample click={this.nextPage} />); break;
            case('practice'): routing = (<SubtractionPractice click={this.nextPage} difficulty={difficulty} />); break;
            case('end'): routing = (<EndModule name={this.props.name} moduleType="subtraction" submission={submission} click={this.nextPage} increaseDifficulty={this.increaseDifficulty} />); break;
            default: routing = (<SubtractionBackground click={this.nextPage}/>); break;
        }
        return (
            <div>
                <Header title="Subtraction Module" icon="fa-minus" className="subtraction-header">
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

SubtractionModule.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default SubtractionModule;