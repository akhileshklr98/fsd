let myArray = [{"child":["one","two","three","four"]},
{"child":["five","six","seven","eight"]}];

for(let i=0; i<myArray.length; i++){
    var child = myArray[i].child;
    for(let j=0; j<child.length; j++){
        console.log(child[j]);
    }
}