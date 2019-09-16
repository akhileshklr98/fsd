// $(document).ready( ()=>{
//     $.ajax( {
//         type:"GET",
//         url:"http://127.0.0.1:8084/mydata.json",
//         success: (data)=>{
//             // console.log(data);
//             var ouput = "<table class='table table-bordered'> <thead> <tr> <td> Name </td> <td> Age </td> <td> DOB </td> <td> College </td> </tr> </thead> <tbody>";

//             for (var i in data) {
//                 var name = data[i].name;
//                 var age = data[i].age;
//                 var dob = data[i].dob;
//                 var college = data[i].college;

//                 ouput+="<tr> <td> "+name+" </td> <td> "+age+" </td> <td> "+dob+" </td> <td> "+college+" </td> </tr>";
//             }
//             ouput+="</tbody> </table>";
//             $('#result').html(ouput);
//         }
//     } );
// });

$(document).ready( ()=>{
    $.ajax( {
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
        success: (data)=>{
            // console.log(data);
            var ouput = "<table class='table table-bordered'> <thead> <tr> <td> Name </td> <td> Username </td> <td> Email </td> <td> Street </td> </tr> </thead> <tbody>";

            for (var i in data) {
                var name = data[i].name;
                var username = data[i].username;
                var email = data[i].email;
                var street = data[i].address.street;

                ouput+="<tr> <td> "+name+" </td> <td> "+username+" </td> <td> "+email+" </td> <td> "+street+" </td> </tr>";
            }
            ouput+="</tbody> </table>";
            $('#result').html(ouput);
        }
    } );
});