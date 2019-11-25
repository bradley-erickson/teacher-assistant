import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassScores extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                Gay babies in class
            </div>
        );
    }
}

ClassScores.propTypes = {
    user: PropTypes.object.isRequired
}

export default ClassScores;