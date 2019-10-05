const EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('myEvent',(user)=>{
    console.log(`Id is ${user.id} and name is ${user.name}`);
});

emitter.emit('myEvent',{id:1,name:'Akhilesh'});