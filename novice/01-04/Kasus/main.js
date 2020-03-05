var re = /[\w-]+@([\w-]+\.)+[\w-]+$/;
var name = /[([^@])]/;
var domain = /[a-zA-Z0-9]+\.+[a-z]{2,4}/;
function checkemail(email) {
    var OK = re.exec(email);
    var name = name.exec(email);
    var domain = domain.exec(email);
    if (!OK) {
        alert(email + ' bukanlah email anda'); 
  } else {
    alert('Halo, username anda '+ name + ' dan domain anda adalah ' + domain);}
} 