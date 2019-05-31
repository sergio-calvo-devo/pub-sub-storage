import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import MessagesPanel from './MessagesPanel.jsx';
import SubscribeForm from './SubscribeForm.jsx';
import SubscriptionList from './SubscriptionList.jsx';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [{
        id: 1,
        topic: 'aaa',
        title: 'Yeeee',
        text: 'Hola caracola'
      },{
        id: 2,
        topic: 'eee',
        title: 'Diiiiu',
        text: 'EEEEEESO'
      }],
      subscribedTopics: []
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <SubscribeForm
          onSubscribe={topic => {
            this.setState(({subscribedTopics}) => {
              const subs = [...new Set([...subscribedTopics, topic])];
              return {
                subscribedTopics: subs
              };
            });
          }}
          onUnsubscribe={topic => {
            this.setState({
              subscribedTopics: this.state.subscribedTopics
                                .filter(x => x !== topic)
            });
          }}
        />
        <SubscriptionList subscriptions={this.state.subscribedTopics} />
        <MessagesPanel
          subscriptions={this.state.subscribedTopics}
          messages={this.state.messages}/>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
};

const container = document.getElementById('app');
container ? ReactDOM.render(<App />, container) : false;
