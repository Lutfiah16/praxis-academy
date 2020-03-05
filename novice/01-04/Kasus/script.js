var re = /[A-Z]{1,2}\s+[0-9]{1,3}\s+[A-Z]{1,2}/;
function testInfo(platInput) {
  var OK = re.exec(platInput.value);
  if (!OK) {
    alert(platInput.value + ' bukan plat kendaraan bermotor !!'); 
  } else {
    alert('Plat nomor anda adalah '+ platInput.value);}
} 