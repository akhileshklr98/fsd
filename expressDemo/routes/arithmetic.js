const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{

})

// router.get('/sum', (req,res)=>{
//     var number1 = parseInt(req.query.num1);
//     var number2 = parseInt(req.query.num2);
//     var sum = number1 + number2;
//     res.json({"result":sum});
// });

router.post('/biggest', (req,res)=>{
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

router.post('/oddoreven', (req,res)=>{
    var Number = parseInt(req.body.number);
    if(Number % 2 ==0){
        value = "Even"
    }else{
        value = "Odd"
    }
    res.json({"result":value})
})

// Using body-parser
router.post('/add', (req,res)=>{
    var number1 = parseInt(req.body.num1);
    var number2 = parseInt(req.body.num2);
    var sum = number1 + number2;
    res.json({"result":sum});
});

module.exports = router