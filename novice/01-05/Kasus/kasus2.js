let data ={ buku : "book", jendela : "window"};


function tambah(){
var a = prompt("Masukkan kata :");
var b = prompt("Masukkan kata :");
let kata = Array.from(data);
    console.log(a,b);
    let kamus = new Map();
    kamus.set(a,b);
    alert(kamus.get(a));
    console.log(kamus);
}
tambah();



function cari(){
    var c = document.getElementById().Value;
    console.log(kamus.get(data));
}
cari();


//function hapus(){
//kamus.delete("kata")
//}