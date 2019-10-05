const fs = require('fs');

fs.writeFile('text','Full Stack Development',function(err){
    if(err) console.log(err);
    else console.log('Write Operation Completed');
});