import React from 'react';

export default class SubscriptionList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>Subscribed to:</div>
        <div>{this.props.subscriptions.join()}</div>
      </div>
    );
  };
}
