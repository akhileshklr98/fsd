add = (x,y,callback)=>{
    var z=x+y;
    // console.log(z);

    callback(z);
}

status = (result)=>{
    console.log('Success '+result);
}

var a=10;
var b=12;

add(a,b,status);