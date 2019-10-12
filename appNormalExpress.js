const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');

var app = new express();

var studentRouter = require('./routes/student')

app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'/public')));

app.use('/student',studentRouter)


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

// app.get('/addstudent', (req,res)=>{
//     var getName = req.query.name;
//     var rollno = req.query.rol;
//     res.send('Welcome '+getName+' RollNo '+rollno);
// });

app.get('/addnumbers', (req,res)=>{
    var number1 = parseInt(req.query.num1);
    var number2 = parseInt(req.query.num2);
    var sum = number1 + number2;
    res.json({"result":sum});
});

app.post('/biggest', (req,res)=>{
    var number1 = parseInt(req.query.num1);
    var number2 = parseInt(req.query.num2);
    var number3 = parseInt(req.query.num3);

    if(number1<number2 && number2>number3){
        big = number2;
    }else if(number1>number2 && number1>number3){
        big = number1
    }else{
        big = number3;
    }

    res.json({"result":big});
});

// Using body-parser
app.post('/addemployee', (req,res)=>{
    var getName = req.body.name;
    var getAge = req.body.age;
    res.send("Name : "+getName+", Age "+getAge)
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

app.post('/oddoreven', (req,res)=>{
    var Number = parseInt(req.body.number);
    if(Number % 2 ==0){
        value = "Even"
    }else{
        value = "Odd"
    }
    res.json({"result":value})
})

app.post('/addtwonumbers', (req,res)=>{
    var number1 = parseInt(req.body.num1);
    var number2 = parseInt(req.body.num2);
    var sum = number1 + number2;
    res.json({"result":sum});
});

// Using Template Engine
app.get('/myweb', (req,res)=>{
    // res.render('index')  //render function used to append template file
    res.render('sum')
})

app.listen(3000, ()=>{
    console.log("Listening of port "+chalk.green('3000'));
});