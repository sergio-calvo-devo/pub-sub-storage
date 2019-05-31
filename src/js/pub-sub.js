export default class PubSub {
  constructor() {
    this._subscribedTopics = new Set();

    global.addEventListener('storage', event => {
      const { newValue, storageArea } = event;
      if (storageArea === global.localStorage) {
        const message = JSON.parse(newValue);
        this._notify(message);
      }
    });
  }

  subscribe(topic) {
    this._subscribedTopics.add(topic);
    for(let x in {...global.localStorage}) {
      const message = JSON.parse(global.localStorage[x]);
      this._notify(message);
    }
  }

  unsubscribe(topic) {
    this._subscribedTopics.delete(topic);
  }

  publishMessage(topic, text) {
    const creationDate = Date.now();
    const message = { topic, text, creationDate };
    const key = `${topic}$${creationDate}`;

    this._notify(message);
    global.localStorage.setItem(key, JSON.stringify(message));
  }

  get onmessage() { return this._onMessage; }
  set onmessage(cb) { this._onMessage = cb; }

  _notify(message) {
    if (this._subscribedTopics.has(message.topic)) {
      this._onMessage && this._onMessage(message);
    }
  }
}
