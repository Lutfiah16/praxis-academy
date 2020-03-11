judul materi : Paradigma Pemrograman di JavaScript: OOP (2)
nama : Lutfiah Atsari sujud
tanggal : 11 maret 2020



- definisi class
Kelas sebenarnya "fungsi khusus", dan sama seperti Anda dapat mendefinisikan 
ekspresi fungsi dan deklarasi fungsi, sintaksis kelas memiliki dua komponen: 
ekspresi kelas dan deklarasi kelas.

- class declaration
Salah satu cara untuk mendefinisikan kelas adalah dengan menggunakan deklarasi kelas. Untuk mendeklarasikan kelas, 
Anda menggunakan kata kunci kelas dengan nama kelas

- hoisting
Perbedaan penting antara deklarasi fungsi dan deklarasi kelas adalah deklarasi fungsi yang diangkat dan deklarasi kelas tidak. 
Pertama-tama Anda harus mendeklarasikan kelas Anda dan kemudian mengaksesnya, 
jika tidak kode seperti berikut akan melempar ReferenceError:

- class expressions
Ekspresi kelas adalah cara lain untuk mendefinisikan kelas. Ekspresi kelas dapat dinamai atau tidak disebutkan namanya. 
Nama yang diberikan untuk ekspresi kelas bernama lokal untuk badan kelas. 
(itu dapat diambil melalui properti nama kelas (bukan instance), meskipun).

- Class body and method definitions
Tubuh kelas adalah bagian yang ada dalam kurung keriting {}. Di sinilah Anda 
mendefinisikan anggota kelas, seperti metode atau konstruktor.

strict mode
Tubuh kelas dieksekusi dalam mode ketat, mis., Kode yang ditulis di sini tunduk 
pada sintaksis yang lebih ketat untuk peningkatan kinerja, beberapa kesalahan 
diam akan dilempar, dan kata kunci tertentu dicadangkan untuk versi ECMAScript berikutnya.

constructor adalah 
Metode konstruktor adalah metode khusus untuk membuat dan 
menginisialisasi objek yang dibuat dengan kelas. Hanya ada satu metode 
khusus dengan nama "konstruktor" di kelas. SyntaxError akan dilemparkan 
jika kelas berisi lebih dari satu kemunculan metode konstruktor.
Konstruktor dapat menggunakan kata 
kunci super untuk memanggil konstruktor kelas super.

Metode dengan nama "constructor" adalah metode spesial untuk pembuatan 
dan penginisialisasian objek yang dibuat dengan kelas.
sintaks :
constructor([arguments]) { ... }

Deskripsi :
Hanya boleh ada satu metode spesial dengan nama "constructor" dalam 
sebuah kelas. SyntaxError  akan dilemparkan jika suatu kelas memiliki 
lebih dari satu metode konstruktor.Konstruktor dapat menggunakan kata 
kunci super untuk memanggil konstruktor orang-tua.
Jika metode konstruktor tidak didefinisikan dalam sebuah kelas, maka  
kontruktor asali yang akan digunakan.


mode static
Kata kunci statis mendefinisikan metode statis untuk suatu kelas. Metode statis 
dipanggil tanpa membuat instance kelas mereka dan 
tidak dapat dipanggil melalui instance kelas. Metode statis sering digunakan 
untuk membuat fungsi utilitas untuk suatu aplikasi.


boxing with prototype dan static method
Ketika metode statis atau prototipe dipanggil tanpa nilai untuk ini, nilai ini akan ditentukan 
di dalam metode. Perilaku ini akan sama bahkan jika direktif "gunakan ketat" 
tidak ada, karena kode dalam batas sintaksis tubuh kelas selalu dieksekusi dalam 
mode ketat.





link 2
1. 
- Constructor Function
Karena Javascript adalah bahasa pemrograman fungsional di mana semuanya hanya fungsi, untuk memiliki kelas 
seperti (membuat cetak biru untuk objek yang akan dibuat) fungsionalitas dalam javascript, 
fungsi konstruktor digunakan, mari kita lihat bagaimana fungsi konstruktor 
bekerja:

- Prototype
Setiap kali fungsi baru dibuat dalam javascript, mesin Javascript secara default menambahkan properti prototipe ke dalamnya, 
properti ini adalah objek dan kami menyebutnya "objek prototipe". Secara default 
objek prototipe ini memiliki properti konstruktor yang menunjuk kembali ke fungsi kami, 
dan properti lain __proto__ yang merupakan objek :
Properti __proto__ disebut proto dunder, dan ini menunjuk ke properti prototipe fungsi konstruktor kami.
objek prototipe ini dapat digunakan untuk menambahkan properti dan metode baru ke fungsi konstruktor 
menggunakan sintaks berikut dan mereka akan tersedia untuk semua instance dari fungsi konstruktor

protoype adalah menambahkan suatu object tanpa harus menampilakan tapi akan disimpan dilatar belakang
sehingga setelah dipanggil maka object tersebut akan terdeteksi

- classes
Kami memahami fungsi konstruktor dan prototipe, sekarang kelasnya mudah dipahami, mengapa? karena kelas javascript 
hanyalah cara baru untuk menulis fungsi konstruktor dengan memanfaatkan kekuatan prototipe, 
mari kita lihat contoh untuk ini:
class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName() {
        return this.make + " " + this.model;
    }
}

ditambhkan data nya untuk ditampilkan
let car = new Vehicle("Toyota", "Corolla", "Black");

Jadi, jika Anda membandingkan ini dengan apa yang kami lakukan di awal sambil menjelaskan fungsi konstruktor, itu sangat mirip.
Dengan menulis kode di atas, kita sebenarnya telah membuat variabel bernama Kendaraan yang merujuk ke konstruktor fungsi yang 
didefinisikan di kelas, juga kami telah menambahkan metode ke prototipe Kendaraan variabel, sama seperti di bawah ini:




link2
Class basic syntax

Dalam praktiknya, kita sering perlu membuat banyak objek dengan jenis yang sama, seperti pengguna, atau barang atau apa pun.
Seperti yang sudah kita ketahui dari bab Konstruktor, operator "baru", fungsi baru dapat membantu dengan itu.
Tetapi dalam JavaScript modern, ada konstruksi "kelas" yang lebih maju, yang memperkenalkan fitur-fitur baru 
yang hebat yang berguna untuk pemrograman berorientasi objek.
The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
Kemudian gunakan MyClass baru () untuk membuat objek baru dengan semua metode yang terdaftar.
Metode constructor () dipanggil secara otomatis oleh yang baru, sehingga kita dapat menginisialisasi objek di sana.

Apa itu kelas?
Jadi, apa sebenarnya kelas itu? Itu bukan entitas tingkat bahasa yang sepenuhnya baru, seperti yang mungkin dipikirkan orang.
Mari mengungkap sihir apa pun dan melihat apa sebenarnya kelas itu. Itu akan membantu dalam memahami banyak aspek kompleks.
Dalam JavaScript, kelas adalah sejenis fungsi.
Di sini, lihat:
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// proof: User is a function
alert(typeof User); // function


link terakhir
1. class function
Di bagian ini, kita akan membahas beberapa cara kita dapat 
menggunakan fungsi untuk mensimulasikan perilaku kelas.
- Menggunakan Fungsi
Tetapkan fungsi JavaScript normal.
Buat objek dengan menggunakan kata kunci baru.
Tetapkan properti dan metode untuk objek yang dibuat menggunakan kata kunci ini.

2. Prototype property
Kelemahan dari mendefinisikan fungsi getInformation (sebuah function) secara internal adalah ia 
membuat ulang fungsi itu setiap kali kita 
membuat objek Fruit baru. Untungnya, setiap fungsi dalam JavaScript memiliki 
sesuatu yang disebut Prototype property, yang kosong secara default. Kita dapat 
menganggap prototipe fungsi sebagai cetak biru atau paradigma objek; ketika kita 
menambahkan metode dan properti ke prototipe, mereka dapat diakses oleh semua 
instance dari fungsi itu. Ini sangat berguna untuk warisan (dibahas di bawah).
Kita dapat menambahkan fungsi ke prototipe fungsi konstruktor seperti:


3. Menggunakan Objek Literal
Kita bisa menggunakan objek literal untuk mendefinisikan properti dan fungsi objek dengan menginisialisasi variabel 
dengan daftar pasangan nilai properti yang dipisahkan koma yang terlampir dalam 
kurung kurawal.

4. Kelas Singleton Menggunakan Fungsi
Kelas singleton adalah pola desain yang membatasi kelas untuk satu instance. 
Saat kami menetapkan nilai new function () {...} ke variabel, berikut ini terjadi:
Kami mendefinisikan fungsi konstruktor anonim.
Kami memohon fungsi konstruktor anonim dengan kata kunci baru.

5.Kelas
Kelas JavaScript, diperkenalkan dalam ECMAScript 6, pada dasarnya adalah sintaksis 
gula atas warisan berbasis prototipe yang ada JavaScript yang tidak benar-benar 
memperkenalkan model warisan berorientasi objek baru. Sintaks ini adalah cara 
yang lebih sederhana dan jelas menciptakan objek dan berurusan dengan warisan.
Kami mendefinisikan kelas dalam dua cara:

- Deklarasi Kelas
Salah satu cara untuk mendefinisikan kelas adalah dengan menggunakan deklarasi 
kelas. Untuk mendeklarasikan kelas, kami menggunakan kata kunci kelas dan 
mengikutinya dengan nama kelas. Idealnya, kami selalu menulis nama kelas di 
TitleCase.
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let p = new Polygon(1, 2);
console.log('Polygon p:', p);

Perbedaan penting antara deklarasi fungsi dan deklarasi kelas adalah deklarasi fungsi diangkat 
(mis., Dapat direferensikan sebelum dideklarasikan) tetapi deklarasi kelas tidak. 
Ini berarti kita harus mendeklarasikan kelas kita terlebih dahulu sebelum mencoba
mengakses (atau referensi) itu; jika kita gagal melakukannya, kode kita melempar 
ReferenceError.