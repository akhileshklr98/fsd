var myPromise = new Promise( (reslove,reject)=>{

    var myGrade = "B+";

    if(myGrade == "A+"){
        reslove();
    }else{
        reject();
    }
});

myPromise.then( ()=>{
    console.log('Promise Satisfied');
}).catch( ()=>{
    console.log('Promise Rejected');
})