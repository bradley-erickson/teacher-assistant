import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StudentScores extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                Gay babies
            </div>
        );
    }
}

StudentScores.propTypes = {
    user: PropTypes.object.isRequired
}

export default StudentScores;