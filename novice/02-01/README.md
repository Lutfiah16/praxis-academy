judul materi : Paradigma Pemrograman di JavaScript: OOP
nama : Lutfiah Atsari Sujud
tanggal : 10 maret 2020


OOP(Object Oriented Programing)
merupakan sebuah metode pemrograman dimana sebuah kode kita istilahkan degan object
yang terdiri dari properties dan method
dan didalam OOP ada yang menggunakan class yang merupakan sebuah bluprint,tamplate ,prototype 
serta mendefinisikan variabel dan function/method/operation

diumpamakan OOP itu sebuah pewarisan/turunan dimana contoh
contoh kendaraan dimana memiliki keterangan umum berupa bahan bakar,warna dan roda
dikendaraan itu ada turunan mobil dan motor yang memiliki keterangan khusus berupa jumlah kapasitas dan warna
untuk tau keterangan umum pada kendaraan dengan cara manggil saja di sebuah objek dari function kendaraan/class kendaraan itu sendiri 
tanpa harus mengulang berkali kali di function di dua buah kendaraan mobil dan motor itu

untuk pemanggilannya dengan cara perintah namaobject.call
contoh programnya adalah sbb :

//orang tua
var Kendaraan = function(warna){
    this.warna = warna;
}



//turunan
var Mobil = function(warna){
    Kendaraan.call(warna)
}
//karena js first objek maka dibuat objek dulu
Mobil.prototype = Object.create(Kendaraan.prototype);

//konstructor ini panggilannya
Mobil.prototype.constructor = Mobil ;

//constructor dipake ketika function/class kendaran digunakan
var Mobil = new Kendaraan('biru');

console.log(Mobil.warna);


method yang terdapat di OOP ini salah satu nya adalah 
Object.create();
Membuat objek baru dengan objek dan properti prototipe yang ditentukan.
namun ada kekurangan nya yaitu erjaan dua kali yaitu membuat
object lain untuk menunjang object inti dengan itu kita menggunakan cara prototype




