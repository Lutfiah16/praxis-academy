judul materi : Asynchronous Programming di JavaScript
nama : Lutfiah Atsari Sujud
tanggal : 14 Maret 2020
konsep nya adalah 
mengerjakan test 1 blm selesai bisa pindah mengerjakan tread ke test yang lain

multi threaded = > ada 3 treas bisa dilakukan bersamaan (parallelism)

single => sesuatu yang concurrency



Asynchronous callback adalah dimana program yang memiliki kegiatan 3
maka akan dijalankan kegiatan pertama lalu kedua diskip sehingga ke kegiatan ke 3
maka akan menampilkan kegiatan ketiga sehingga kegiatan yg kedua akan tampil
setelah kegiatan 3 itu diproses dan tampil
bisa terjadi jika ada event loop => on click

Asynchronous callback pada WEB API yaitu timeout

callbacks
sebuah function yang dikirimkan sebagai parameter pada function yg lain atau function yang
dieksekusi setelah funnction lain selesai dijalankan
contoh :
//synchronous callback
function halo(nama){
alert(`halo, ${nama}`);
}

function tampilkanPesan(callback){
const nama = prompt('Masukkan nama : ');
callback(nama);
}

tampilkanPesan(halo); 

atau
function tampilkanPesan(callback){
const nama = prompt('Masukkan nama : ');
callback(nama);
}

tampilkanPesan(nama => alert(`halo, ${nama}`)); 

Asynchronous callback 

function getDatamahasiswa(url,success,error){
	let a = new XMLHttpRequest();
	a.onreadystat
}