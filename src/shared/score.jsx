import React from 'react';
import PropTypes from 'prop-types';

const Score = (props) => {
    return (
        <div>
            <div>
                {props.score.studentID}
            </div>
            <div>
                Module: {props.score.module}
            </div>
            <div>
                Score: {props.score.correct}/{props.total}
            </div>
            <div>
                Attempts: {props.score.attempts}
            </div>
            <div>
                Date: {props.score.dateStamp}
            </div>            
        </div>
    );
};

Score.propTypes = {
    score: PropTypes.object,
}

export default Score;