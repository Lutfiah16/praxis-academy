// function proses(){
// try {
//     alert("mulai");
//     return "result";
// } catch (err){
//     alert(alert.message);
// } finally{
//     alert("Selesai");
// }
// }
// proses();

function proses(){
    try {
        throw new error("Error!!");
    } catch (e){
        if("can't handle the error") {
        }
    } finally{
        alert("Selesai");
    }
    }
    proses();