const EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('myEvent',(arg1,arg2)=>{
    console.log(`Id is ${arg1} and name is ${arg2}`);
});

emitter.emit('myEvent',1,'Rahul');