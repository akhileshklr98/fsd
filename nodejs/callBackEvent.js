const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('myevent', ()=>{
    console.log('Akhilesh');
});

emitter.emit('myevent');