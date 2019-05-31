import React from 'react';
import PropTypes from 'prop-types';

export default class SubscribeForm extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this._handleSubscribe = () => this.props.onSubscribe
      && this.props.onSubscribe(this.textInput.current.value);

    this._handleUnsubscribe = () => this.props.onUnsubscribe
      && this.props.onUnsubscribe(this.textInput.current.value);
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="sub-topic">Topic:</label>
          <input type="text" id="sub-topic" ref={this.textInput} />
        </div>
        <div>
          <button onClick={this._handleSubscribe}>Subscribe</button>
          <button onClick={this._handleUnsubscribe}>Unsubscribe :(</button>
        </div>
      </div>
    );
  }
}

SubscribeForm.propTypes = {
  onSubscribe: PropTypes.func,
  onUnsubscribe: PropTypes.func
}
