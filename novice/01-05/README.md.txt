Object
cara membuat objek adalah sbb :
1. secara literal 
cara nya
2. objek membuat fuction deklarasion
3. contructor function
4. object.create()

Objek.kunci, nilai, entri
Mari kita menjauh dari struktur data individual dan berbicara tentang iterasi di atasnya.

Pada bab sebelumnya kita melihat metode map.keys (), map.values ​​(), map.entries ().

Metode-metode ini bersifat umum, ada kesepakatan umum untuk menggunakannya untuk struktur data. Jika kita pernah membuat struktur data kita sendiri, kita harus mengimplementasikannya juga.

Mereka didukung untuk:

Peta
Set
Himpunan
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