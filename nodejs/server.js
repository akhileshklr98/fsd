const http = require('http');
const url = require('url');

var server = http.createServer( (req,res)=>{
    var urlParts = url.parse(req.url);
    // console.log(urlParts)
    var pathName = urlParts.pathname;
    console.log(pathName)
    // res.write("Hello World!")
    // res.end();
    switch(pathName){
        case "/" :
            homePage(req,res);
            break;
        case "/read" :
            read(req,res);
            break;
        case "/user/update" :
            update(req,res);
            break;
        default:
            homePage(req,res);
            break;
    }
});

server.listen(8080, ()=>{
    console.log('listening 8080');
});

function homePage(req,res){
    res.end("This is the Home Page");
}

function read(req,res){
    res.end("This is the Read Page");
}

function update(req,res){
    res.end("This is the Update Page");
}