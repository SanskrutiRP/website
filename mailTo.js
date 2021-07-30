const open1 = document.getElementById("sendmail");
open1.addEventListener('click', ()=> {
    var email = document.getElementById('email').value;
    var subject = document.getElementById('sub').value;
    var emailBody = "Hi I am "+document.getElementById('name').value+"<br>"+document.getElementById('msg').value;
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
});