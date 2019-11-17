import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMessages } from '../helpers/database-helpers.js';
import Message from './messages.js';

class MessageSection extends Component {
    constructor(props) {
        super(props);
        this.fetchMessages = this.fetchMessages.bind(this);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.fetchMessages();
    }

    async fetchMessages() {
        const { classId } = this.props;
        const response = await getMessages(classId);
        this.setState({ messages: response[0].messages });
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                Messages Here
                {messages.map(message => (<Message text={message.text} key={message._id} />))}
            </div>
        );
    }
}

MessageSection.propTypes = {
    classId: PropTypes.number.isRequired
}

export default MessageSection;
