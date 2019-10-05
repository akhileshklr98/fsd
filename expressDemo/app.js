const express = require('express');
var app = new express();

app.all('/', (req,res)=>{
    res.send('Hello World');
});

app.listen(3000);