import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    return (
        <div key={props.id}>
            {props.text}
        </div>
    );
};

Message.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Message;
