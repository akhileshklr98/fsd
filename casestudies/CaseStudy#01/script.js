$(document).ready( ()=>{
    $('#btnLogin').click( ()=>{
        var username = $('#txtUsername').val();
        var password = $('#txtPassword').val();

        userLogin = (userName,passWord,fun)=> {

            if(userName=='admin' && passWord=='12345'){
                fun();
            }
        }
        locate = ()=>{
            
            window.location.href="mainpage.html";
        }
        
        userLogin(username,password,locate);
    });

    $.ajax({
        type : "GET",
        url : "https://jsonplaceholder.typicode.com/todos",
        success : (result)=>{
            var output = '';
            output += "<form id='formToDos'><table id='myTable' class='table'><thead><tr><th>ID</th><th>Title</th><th>Completed</th></tr></thead><tbody>";
            for (var i in result) {
                var id = result[i].id;
                var title = result[i].title;
                var completed = result[i].completed;

                output += "<tr><td>"+id+"</td><td>"+title+"</td><td>"+completed+"</td><td><input type='checkbox' name='checkBox' id='"+id+"' value='"+title+"' onclick='clickCheckbox()'></td></tr>";
            }
            output += "</tbody></table></form>";
            $('#resultTodos').html(output);
        }
    });

});

clickCheckbox = ()=>{
    var $checkboxes = $('input[type="checkbox"]');
    var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
    var myPromise = new Promise( (resolve)=>{
        if(countCheckedCheckboxes == 5){
            resolve();
        }
        // else{
        //     reject();
        // }
    });
    myPromise.then( ()=>{
        alert('Congrats. 5 Tasks have been Successfully Completed');
    })
    // .catch( ()=>{
    //     console.log('no');
    // })
    
}