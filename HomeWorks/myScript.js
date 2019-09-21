function ShowUserData(){
    let name = document.getElementById('txtName').value;
    let address = document.getElementById('txtAddress').value;
    let dob = document.getElementById('txtdob').value;
    let mobile = document.getElementById('txtMobile').value;
    let email = document.getElementById('txtEmail').value;
    let username = document.getElementById('txtUsername').value;
    let password = document.getElementById('txtPassword').value;

    document.getElementById('result').innerHTML=name;
    document.getElementById('address').innerHTML=address;
    document.getElementById('dob').innerHTML=dob;
    document.getElementById('mobile').innerHTML=mobile;
    document.getElementById('email').innerHTML=email;
    document.getElementById('username').innerHTML=username;
    document.getElementById('password').innerHTML=password;
}

function ShowEmployeeData(){
    let ID = document.getElementById('txtEmployeeID').value;
    let name = document.getElementById('txtEmployeeName').value;
    let address = document.getElementById('txtAddress').value;
    let salary = document.getElementById('txtSalary').value;
    let designation = document.getElementById('txtDesignation').value;

    document.getElementById('tdID').innerHTML=ID;
    document.getElementById('tdName').innerHTML=name;
    document.getElementById('tdAddress').innerHTML=address;
    document.getElementById('tdSalary').innerHTML=salary;
    document.getElementById('tdDesignation').innerHTML=designation;
}

function NumberReverse(){
    let number = document.getElementById('txtNumber').value;
    var reverse = 0;
    while(number>0){
        var num = number % 10;
        reverse = (reverse*10) + num;
        number = parseInt(number / 10);
    }
    document.getElementById('result').innerHTML='Reverse is '+reverse;
}

function OddorEven(){
    let number = document.getElementById('txtNumber').value;
    let res = '';
    if(number % 2 == 0){
        res = 'Given Number is Even';
    }else{
        res = 'Given Number is Odd';
    }
    document.getElementById('result').innerHTML=res;
}

function Operation(){
    let num1 = document.getElementById('txtNumber1').value;
    let num2 = document.getElementById('txtNumber2').value;
    let op = document.getElementById('selOperator').value;
    let res = 0;
    switch(op){
        case 'add':
            // res = num1 + num2;
            res = parseInt(num1) + parseInt(num2);
            break;
        case 'sub':
            res = num1 - num2;
            break;
        case 'mul':
            res = num1 * num2;
            break;
        case 'div':
            res = num1 / num2;
            break;
        default:
            res = '';
            break;
    }
    document.getElementById('result').innerHTML=res;
}

$(document).ready( ()=>{
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
        success: (result)=>{
            // console.log(result);
            output = "";
            for (var i in result) {
                var title = result[i].title;
                var image = result[i].url;
                output +="<div class='card' style='width:100%; height:100px'><img src='"+image+"' alt='"+title+"'><div class='card-body'><p class='card-text'>"+title+"</p></div></div>";
            }
            // output += "</div>";
            $('.resultPhotos').html(output);
        }
    });

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/albums",
        success: (result)=>{
            var output = "<table class='table'><thead><tr><th>ID</th><th>Title</th></tr></thead><tbody>";
            for (var i in result) {
                var id = result[i].id;
                var title = result[i].title;
                output += "<tr><td>"+id+"</td><td>"+title+"</td</tr>";
            }
            output += "</tbody></table>";
            $('.resultAlbums').html(output);
        }
    });

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: (result)=>{
            var output = "<table class='table table-border'><thead><tr><th>ID</th><th>Title</th><th>Body</th></tr></thead><tbody>";
            for (var i in result) {
                var id = result[i].id;
                var title = result[i].title;
                var body = result[i].body;
                output +="<tr><td>"+id+"</td><td>"+title+"</td><td>"+body+"</td></tr>";
            }
            output +="</tbody></table>";
            $('.resultPosts').html(output);
        }
    });

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/comments",
        success: (result)=>{
            var output = "<table class='table table-border'><thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Body</th></tr></thead><tbody>";
            for (var i in result) {
                var id = result[i].id;
                var name = result[i].name;
                var email = result[i].email;
                var body = result[i].body;
                output +="<tr><td>"+id+"</td><td>"+name+"</td><td>"+email+"</td><td>"+body+"</td></tr>";
            }
            output +="</tbody></table>";
            $('.resultComments').html(output);
        }
    });
});