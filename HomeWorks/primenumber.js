for(var i=2;i<=500;i++){
    var prime=0;
    for(var j=(i-1);j>1;j--){
        if(i%j==0){
            prime++;
        }
    }
    if(prime==0){
        console.log(i);
    }
}