import PubSub from './pub-sub';
import App from './components/App.jsx';

// const wireEvents = container => {
//   const pubSub = new PubSub();

//   container.querySelector('.subscribe').onclick  = () => {
//     const topic = container.querySelector('.sub-topic').value;
//     pubSub.subscribe(topic);
//   }

//   container.querySelector('.unsubscribe').onclick = () => {
//     const topic = container.querySelector('.sub-topic').value;
//     pubSub.unsubscribe(topic);
//   }

//   container.querySelector('.publish').onclick = () => {
//     const topic = container.querySelector('.msg-topic').value;
//     const msg = container.querySelector('.msg').value;
//     pubSub.publishMessage(topic, msg);
//   }

//   pubSub.onmessage = message => {
//     const { topic, creationDate, text } = message;
//     const publishedList = container.querySelector('.published-list');
//     const newMessage = document.createElement('div');
//     newMessage.innerHTML
//       = '<div>'
//       + `  <strong>${topic}(${new Date(creationDate).toLocaleDateString()})</strong>`
//       + '</div>'
//       + `<div>${text}</div>`;
//     publishedList.appendChild(newMessage);
//   };
// }

// wireEvents(document.getElementById('container-1'));
