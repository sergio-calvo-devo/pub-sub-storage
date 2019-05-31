import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message.jsx';

export default class MessageList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>{this.props.topic}</div>
        {this.props.messages.map(message => {
          const {id, topic, title, creationDate, text} = message;
          return <Message key={id}
            topic={topic}
            title={title}
            creationDate={creationDate}
            text={text} />;
        })}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array,
  topic: PropTypes.string
}
