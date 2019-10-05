const fs = require('fs');

const data = fs.readFileSync('dummyfile.txt','utf8');
console.log(data);