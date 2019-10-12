const Express = require('express')
const router = Express.Router();

router.get('/add', (req,res)=>{
    var getName = req.query.name;
    var rollno = req.query.rol;
    res.send('Welcome '+getName+' RollNo '+rollno);
});

module.exports = router