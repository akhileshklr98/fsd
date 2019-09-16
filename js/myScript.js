function readValues(){
    // console.log('Clicked!....');
    var name=document.getElementById('txtName').value;
    let rollNo=document.getElementById('txtRollNo').value;

    console.log(name);
    console.log(rollNo);

}
function addNumbers(){
    var number1=parseInt(document.getElementById('number1').value);
    var number2=parseInt(document.getElementById('number2').value);
    var result = number1+number2;
    console.log(result);
    document.getElementById('result').innerHTML=result;
    // console.log(number2);

}