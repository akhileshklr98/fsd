const EventEmitter = require('events');
var emitter = new EventEmitter();

//Defining Function
function MyEvent(){
    console.log('My Event');
}

//Register Listener(Binding)
emitter.on('myevent',MyEvent);

//Raise an event
emitter.emit('myevent');

