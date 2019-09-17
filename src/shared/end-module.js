import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

class EndModule extends Component {
    constructor(props) {
        super(props);
        this.retry = this.retry.bind(this);
    }

    retry() {
        this.props.increaseDifficulty();
        this.props.click('practice');
    }
    
    render() {
        const { moduleType, submission } = this.props;
        return (    
            <div>
                <div>
                    <b className="body-header">Congratulations, {this.props.name}!</b>
                    <br />
                    You completed the {_.upperFirst(moduleType)} module in {submission} submissions!
                </div>
                <Link to="/menu">
                    <Button className="right-margin top-margin">
                        <i className="fa fa-home right-margin" />
                        Menu
                    </Button>
                </Link>
                <Link to={`/${moduleType}/practice`}>
                    <Button onClick={this.retry}>
                        Up difficulty
                    </Button>
                </Link>
            </div>
        );
    }
};

EndModule.propTypes = {
    moduleType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    increaseDifficulty: PropTypes.func.isRequired,
    submission: PropTypes.number.isRequired
}

export default EndModule;