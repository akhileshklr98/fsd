const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

eventEmitter.once('myEvent', ()=>{
    console.log('Listener');
});

eventEmitter.emit('myEvent');
eventEmitter.emit('myEvent');