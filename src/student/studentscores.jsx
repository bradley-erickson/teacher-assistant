import React from 'react';
import PropTypes from 'prop-types';

const SScore = (props) => {
    return (
        <div key={props.id}>
            <div>
                Module: {props.module}
            </div>
            <div>
                Score: {props.correct}/{props.total}
            </div>
            <div>
                Attempts: {props.attempts}
            </div>
            <div>
                Date: {props.dateStamp}
            </div>            
        </div>
    );
};

SScore.propTypes = {
    id: PropTypes.string,
    module: PropTypes.string,
    correct: PropTypes.number,
    total: PropTypes.number,
    attempts: PropTypes.number,
    dateStamp: PropTypes.string
}

export default SScore;