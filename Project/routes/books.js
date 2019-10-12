
var myBooks = [
    {
        "bookTitle":"Recursion",
        "author":"Blake Crouch",
        "genre":"Thriller",
        "description":"esdfcghjk",
        "price":150,
        "url":"http://api.randomuser.me/portraits/thumb/men/58.jpg"
    },
    {
        "bookTitle":"asdf",
        "author":"werthyju",
        "genre":"wefrgty",
        "description":"wertygrth egrthyu awerthyju",
        "price":500,
        "url":"http://api.randomuser.me/portraits/thumb/men/58.jpg"
    }
]

var express = require('express')
var router = express.Router()

router.get("/", (req,res)=>{
    res.render('index',{books:myBooks})
})

module.exports = router