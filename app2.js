const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', function(){
  console.log('an event occurred!');
});

myEmitter.emit('event');
