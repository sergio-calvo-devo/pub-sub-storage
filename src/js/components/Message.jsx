import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <span>{this.props.topic}</span>
          <span>{this.props.title}</span>
          <span>{this.props.creationDate}</span>
        </div>
        <div>{this.props.text}</div>
      </div>
    )
  }
}

Message.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string,
  creationDate: PropTypes.instanceOf(Date),
  text: PropTypes.string.isRequired
}
