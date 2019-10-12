const express = require('express')
const router = express.Router()

router.post('/add', (req,res)=>{
    var getName = req.body.name;
    var getAge = req.body.age;
    res.send("Name : "+getName+", Age "+getAge)
});

module.exports = router