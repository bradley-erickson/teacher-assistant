import React from 'react';
import PropTypes from 'prop-types';

const Score = (props) => {
    return (
        <div>
            {props.score.studentID}
            <br />
            Module: {props.score.module}
            <br />
            Score: {props.score.correct}/{props.total}
            <br />
            Attempts: {props.score.attempts}
            <br />
            Date: {props.score.dateStamp}           
        </div>
    );
};

Score.propTypes = {
    score: PropTypes.object,
}

export default Score;