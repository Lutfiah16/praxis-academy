judul materi : Struktur Data di JavaScript
nama : Lutfiah Atsari Sujud
Tanggal : 9 maret 2020




- ARRAY
array dapat menampilkan data number,string,dan boolean bahkan mampu menampilkan array didalam array
metode array
array.length untuk menghitung jumlah data yang ada

yang sering digunakan adalah menambah dan menghapus dari belakang
menambahkan data dari belakang
array.push(999);
menghapus data dari belakang
array.pop();

menambahkan data dari depan
array.unshift("test");
mengahpus data dari depan
array.shift();

jika didalam array ada array maka pemanggilan nya disebutkan urutan array pertama dan urutan di arary keduanya
array[6][0]
array method 
contoh reduce yang biasa digunakan 
foreach adalah looping untuk data array




- OBJECT
method yang ada di object
Object.key(obj) => mengetahui nama nama objek yang ada
Object.value(obj) => untuk mengetahui jumlah isi dari sebuah objek
Object.entries(obj) => manggil keterangan yang ada seperti array


untuk melakukan penjumlahan dalam suatu data yang memiliki objek dan value
buat parameter nya yang bersifat universal pada keterangan (obj)
contoh :
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
function sumSalaries(obj) {

    let sum = 0;
    for (let salary of Object.values(obj)) { // for of itu untuk melooping 
      sum += salary;
    }
  
    return sum;
  }
  
  
  console.log( sumSalaries(salaries) );

tempat untuk menyimpan data berupa properti yang memiliki value ,kekurangan nya tidak dapat meanggil data secara urutan 
c:/ let object =(test : 12, test2 : "asdas")
pemanggilan untuk ditampilkan adalah sbb :
object.test atau object["test2"]

contoh : anotherObject =
jika properti berupa angka maka lebih baik pemanggilan nya menggunakan yang seperti object["test2"]
untuk menghapus semua data yang ada dengan cara 
anotherObject ={}
objek dapat diganti dengan cara seperti 
anotherObject["test2"] = 999
pake let dapat menghapus isi data yang ada
const dapat mengganti sebuah data yang ada namun jika ingin menghapuskan data semuanya maka tidak bisa
const object2 = { 123 : 32, asda : "test"}



- destructuring
contoh : let {a} = {a : 1234 , b : 5678} 

memecah objek 
untuk memanggilan nya adalah console.log(a)

cara membuat objek adalah sbb :
1. secara literal 
cara nya
2. objek membuat fuction deklarasion
3. contructor function
4. object.create()

Objek.kunci, nilai, entri
Mari kita menjauh dari struktur data individual dan berbicara tentang iterasi di atasnya.

Pada bab sebelumnya kita melihat metode map.keys (), map.values ​​(), map.entries ().

Objek polos juga mendukung metode serupa, tetapi sintaksisnya agak berbeda.

Objek.kunci, nilai, entri
Untuk objek biasa, metode berikut tersedia:

Object.keys (obj) - mengembalikan array kunci.
Object.values ​​(obj) - mengembalikan array nilai.
Object.entries (obj) - mengembalikan array pasangan [kunci, nilai].
Harap perhatikan perbedaannya (dibandingkan dengan peta misalnya):

Perbedaan pertama adalah bahwa kita harus memanggil Object.keys (obj), dan bukan obj.keys ().

Kenapa begitu? Alasan utamanya adalah fleksibilitas. Ingat, objek adalah basis dari semua struktur kompleks dalam JavaScript. Jadi kita mungkin memiliki objek data seperti kita sendiri yang mengimplementasikan metode data.values ​​() sendiri. Dan kita masih bisa memanggil Object.values ​​(data) di atasnya.

Perbedaan kedua adalah bahwa Object. * Metode mengembalikan objek array "nyata", bukan hanya iterable. Itu terutama karena alasan historis.

Contohnya:
let user = {
  name: "John",
  age: 30
};
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]


Berikut ini contoh menggunakan nilai Object.values ​​untuk mengulang nilai properti:
let user = {
  name: "John",
  age: 30
};

// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}

Mengubah objek
Objek tidak memiliki banyak metode yang ada untuk array, mis. peta, filter, dan lainnya.

Jika kami ingin menerapkannya, maka kami dapat menggunakan Object.entries mengikuti Object.fromEntries:

Gunakan Object.entries (obj) untuk mendapatkan array pasangan kunci / nilai dari obj.
Gunakan metode array pada array itu, mis. peta.
Gunakan Object.fromEntries (array) pada array yang dihasilkan untuk mengubahnya kembali menjadi objek.
Misalnya, kami memiliki objek dengan harga, dan ingin menggandakannya:
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8




iterables
array.from => menampilkan langsung value dari array tersebut





- MAP dan SET
. MAP
masukkan object sebagai q
harus menggunakan perintah
let nama objek = new map(); => untuk membuat map
untuk menginginkan perubahan atau penambahan menggunakan namaobject.set(objek,value)
untuk memanggil  datanya menggunakan namaobject.get(objek);



. SET 
jika array nya unik 
mengeliminasi data yang sama atau berulang ulang
untuk memulai menggunakan set => let set = new Set();



- weakmap dan weakset
object yang kita buat akan terhapus di memory 



- date dan time
membuat tanggal new Date()
dihitung dalam milisecond