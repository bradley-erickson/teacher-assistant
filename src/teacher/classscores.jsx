import React from 'react';
import PropTypes from 'prop-types';

const TScore = (props) => {
    return (
        <div>
            <div>
                {props.fname}
            </div>
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

TScore.propTypes = {
    fname: PropTypes.string,
    id: PropTypes.string,
    module: PropTypes.string,
    correct: PropTypes.number,
    total: PropTypes.number,
    attempts: PropTypes.number,
    dateStamp: PropTypes.string
}

export default TScore;