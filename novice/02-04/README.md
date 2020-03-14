
judul materi : Asynchronous Programming di JavaScript 
nama : Lutfiah Atsari Sujud
Tanggal : 14 maret 2020


Callback 

- pengertian 
. merupakan mekanisme untuk memanggil kembali kode yang ada diprogram dari proses async
. adalah sebuah function yang dikirimkan sebagai paramater(int,string,object, atau function)
pada function yang lain dan sebuah function yang dieksekusi setelah function lain selesai dijalankan
. callback biasanya digunakan dalam bentuk function, dan function tersebut akan dieksekusi
saat proses async selesai
. dengan menggunakan callback,program bisa menerima informasi yang dibutuhkan dari proses
yang berjalan secara async
. Asynchronous callback adalah dimana program yang memiliki kegiatan 3 maka akan dijalankan kegiatan pertama 
lalu kedua diskip sehingga ke kegiatan ke 3 maka akan menampilkan kegiatan ketiga sehingga kegiatan yg kedua 
akan tampil setelah kegiatan 3 itu diproses
. disetiap proses Async callback akan terjadi yang nama nya event loop yang berguna mengecek
di callback queue ada antriannya atau tidak
. pada callback ini ada yang menggunakan Synchronous => sebuah function yang parameter nya function
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

//maka kode diatas akan berproses pada bagian masukkan nama terlebih dahulu lalu menambilkan 
berupa keterangan "halo nama" , nama disini akan menampilkan nama yang telah diinputkan sebelumnya

atau koding seperti ini pun bisa :
function tampilkanPesan(callback){
const nama = prompt('Masukkan nama : ');
callback(nama);
}
tampilkanPesan(nama => alert(`halo, ${nama}`)); 


- contoh method Async
. setTimeout(handler,time) => digunakan untuk menjalankan proses Async sekali dalam waktu tertentu
. setInterval(handler,time) => digunakan untuk menjalankan proses Async secara periodik
dalam waktu tertentu