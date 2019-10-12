var express = require('express')
var bodyParser = require('body-parser')
var chalk = require('chalk')
var path = require('path')

var app = express();

var bookRouter = require('./routes/books')
var authorsRouter = require('./routes/authors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use('/',bookRouter)
// app.use('/author',authorsRouter)

app.use(express.static(path.join(__dirname+"/public")))

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening of port "+chalk.green('3000'));
});