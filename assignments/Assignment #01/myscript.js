function onValidate(){
    var password = document.getElementById('txtPassword').value;
    var confirmPassword = document.getElementById('txtConfirm').value;
    var eMail = document.getElementById('txtEmail').value;
    var num = document.getElementById('txtMobile').value;
    var name = document.getElementById('txtName').value;
    var address = document.getElementById('txtAddress').value;
    var dob = document.getElementById('txtdob').value;
    var username = document.getElementById('txtUsername').value;

    var digit = num.toString()[0];
    var length = num.toString().length;

    if(password!='' && confirmPassword!='' && eMail!='' && num!='' && name!='' && address!='' && dob!='' && username!=''){
        if(password == confirmPassword && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail) && length == 10 && digit == 6 || digit == 7 || digit == 8 || digit == 9){
            alert('Success');
        }else{
            alert('Invalid Mobile Number or Email or Mismatch The Passwords');
        }
    }else{
        alert('Fill All Data');
    }
    
}