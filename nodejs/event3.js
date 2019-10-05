/* Multiple Listener on Same Event */

const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', ()=>{
    console.log('First Listener');
});
eventEmitter.on('myEvent', ()=>{
    console.log('Second Listener');
})

eventEmitter.emit('myEvent');