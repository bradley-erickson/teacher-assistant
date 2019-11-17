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
    }
    
    render() {
        const { moduleType } = this.props;
        return (    
            <div>
                <div>
                    <b className="body-header">Congratulations, {this.props.name}!</b>
                    <br />
                    You completed the {_.upperFirst(moduleType)} module!
                </div>
                <Link to="/student">
                    <Button>
                        <i className="fa fa-home" />
                        Menu
                    </Button>
                </Link>
                <Link to={`/student/${moduleType}/practice`}>
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
    increaseDifficulty: PropTypes.func.isRequired
}

export default EndModule;