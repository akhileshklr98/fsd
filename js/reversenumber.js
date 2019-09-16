var x=147848;
var reminator=0;
var reverse=0;

while(x>0){
    reminator=x%10;
    reverse=(reverse*10)+reminator;
    x=parseInt(x/10);
}
console.log(reverse);