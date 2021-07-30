const open1 = document.getElementById("sendmail");
open1.addEventListener('click', ()=> {
    var email = document.getElementById('email');
    var subject = document.getElementById('sub');
    var emailBody = "Hi I am "+document.getElementById('name')+document.getElementById('msg');
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
});