import React from 'react';
import PropTypes from 'prop-types';

import MessageList from './MessageList.jsx';

export default class MessagesPanel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>Messages:</div>
        {this.props.subscriptions.map(subscription => {
          const messages
            = this.props.messages.filter(x => subscription === x.topic);
          return <MessageList key={subscription}
            topic={subscription}
            messages={messages} />
        })}
      </div>
    );
  }
}

MessageList.propTypes = {
  subscriptions: PropTypes.array,
  messages: PropTypes.array
}
