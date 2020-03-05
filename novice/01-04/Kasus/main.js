var re = /[\w-]+@([\w-]+\.)+[\w-]+$/i;
var rgname = /([^@]*)/;
var rgtId = /[a-zA-Z0-9]+\.+[a-z]{2,4}/;
function testInfo(answer) {
    var OK = re.exec(answer.value);
    var uname = rgname.exec(answer.value);
    var nametId = rgtId.exec(answer.value);
    if (!OK) {
        alert(answer.value + ' bukanlah format email'); 
  } else {
    alert('Halo, username anda '+ uname[0] + ' dan domain anda adalah ' + nametId[0]);
}
}

