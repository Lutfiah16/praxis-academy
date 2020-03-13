judul materi : Paradigma Pemrograman di JavaScript: Functional Programming
nama : Lutfiah atsari sujud
tanggal : 12 maret 2020


paradigma /pola pemrograman utama lainnya
terdiri dari 
- Pemrograman prosedural 
- Pemrograman berorientasi objek
	berdasarkan konsep objek, yang berisi data (atribut) dan prosedur (metode). 
Pola ini lebih dekat dengan Pemrograman Fungsional. 
- pemrograman pola imperatif vs deklaratif
. Pola Imperatif berfokus pada menggambarkan bagaimana suatu program beroperasi, 
itu terdiri dari perintah-perintah untuk komputer untuk melakukan.
. Pola Deklaratif berfokus pada apa yang harus dicapai oleh program tanpa menentukan 
bagaimana program harus mencapai hasil.

contoh menggunakan pola deklaratif
Pendekatan pertama adalah dengan bantuan for loop, iterasi atas array berdasarkan 
panjangnya, kemudian memeriksa penghitung indeks array terhadap panjang array dan 
menambah penghitung indeks pada setiap iterasi. Jadi, ini lebih seperti program 
/ kode fokus atau menjelaskan tentang cara beroperasi untuk output yang diinginkan.
Pendekatan kedua adalah dengan bantuan metode array JavaScript asli map()yang 
mengambil fungsi sebagai argumen dan fungsi itu mendapatkan setiap elemen. 
Jadi dalam hal ini kode tidak menggambarkan tentang cara beroperasi tetapi 
berbicara tentang apa yang harus dicapai dan map()metode di belakang layar 
menangani operasi yang sebenarnya.

- fungsi matematika murni
Math.random() bukan fungsi murni karena selalu mengembalikan nilai baru pada setiap panggilan.
Math.min(1,2) adalah contoh fungsi murni yang selalu mengembalikan nilai yang sama dengan 
rangkaian input yang sama
Math.floar => pembulatan kebawah
Math.sille => pembulatan ketas
Math.arrown => pembulatan terdekat


filter => memfilter dari sebuah array yang akan membuat array baru
semisal dari sebuah aray ada angka 0-10 dan akan di filter angka genap diarray tersebut
sehingga akan meanmpilkan data array yang baru

map => mempetakan setiap array di function sendiri,dan menghasilkan array baru yang 
object yang awal itu masih ada

reduce => menggabungkan array untuk menjadi hasil yang baru dengan bentuk array baru

const angka = [-1,8,9,1,4,-5,-4,3,2,9];

//menggunakan for 

const newAngka = [];
	for(let i=0;i < angka.length; i++){
	  if(angka[i] >= 3){
	//menambahkan angka pada array
	  newAngka.push(angka[i]);
	}
  }
console.log(newAngka);

//menggunakan filter
const newAngka = angka.filter(function(a){
    return a >=3;
 });
console.log(newAngka);

//atau
const newAngka = angka.filter((a) => a >= 3);
console.log(newAngka);


//map => memetakan tiap-tiap elemen yang ada didalam array menggunakan fungsi yang baru contoh :
//kalikan semua angka dari elemen array

const newAngka = angka.map(a => a *2);
console.log(newAngka);

//reduce => untuk melakukan sesuatu terhadap semua elemen pada array nya 

//reduce punya dua argumen dan parameter ada dua =>menggunakan kurung 2 (accumulator => hasil dari prosesnya,
//currentvalue => elemen array yg sedang di loopingnya)

//contoh array dijumlahkan seluruh elemen pada array

const newAngka = angka.reduce((accumulator,currenValue) =>
accumulator + currenValue, 0); // nol ini adalah nilai awal
console.log(newAngka);


//method chaining(berandai) => menggabungkan fungsi2 pada haier
//order function pada satu kali eksekusi,enggk perlu disimpan kedalam variabel
//contoh array yang ada ymencari angka > 5 dan dikalikan 3 dan jumlahkan

const hasil = angka.filter(a => a > 5) //8,9,9
.map(a => a *3) //24,27,27
.reduce((acc,cur) => acc + cur);//78
console.log(hasil);



