const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');

var app = new express();

var studentRouter = require('./routes/student')
var arithmeticRouter = require('./routes/arithmetic')
var employeeRouter = require('./routes/employee')

app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'/public')));

app.use('/student',studentRouter)
app.use('/arithmetic',arithmeticRouter)
app.use('/employee',employeeRouter)


app.post('/', (req,res)=>{
    var myData = [{"name":"Akhilesh","rollno":10},
    {"name":"Sribin","rollno":15},
    {"name":"Rahul","rollno":20},
    {"name":"Ram","rollno":50}]
    // res.send('Full Stack Development');
    // res.sendFile(__dirname+'/index.html');
    res.json(myData);
});

app.get('/contact', (req,res)=>{
    res.send('My Contact Page');
});

app.post('/gallery', (req,rse)=>{
    rse.send("My Gallery............");
});

app.post('/addProduct', (req,res)=>{
    var getProductId = req.body.productId
    var getProductName = req.body.productName
    var getProductPrice = req.body.productPrice
    var getProductQty = req.body.productQty

    res.json({"productid":getProductId,
            "productname":getProductName,
            "productprice":getProductPrice,
            "productqty":getProductQty})
})

// Using Template Engine
app.get('/myweb', (req,res)=>{
    // res.render('index')  //render function used to append template file
    res.render('sum')
})

app.listen(3000, ()=>{
    console.log("Listening of port "+chalk.green('3000'));
});