judul materi : javascript module
nama : Lutfiah Atsari Sujud 
tanggal : 17 Maret 2020



1. struktur data dari javascript modules di MDN adalah sbb :
index.html
main.js
modules/
    canvas.js => berisi fungsi yang berkaitan dengan pengaturan kanvas:
	- create() => membuat kanvas dengan yang ditentukan widthdan heightdi dalam pembungkus <div>dengan ID yang ditentukan, yang dengan sendirinya ditambahkan di dalam elemen induk yang ditentukan. Mengembalikan objek yang berisi konteks 2D kanvas dan ID pembungkus.
	- createReportList() => Membuat daftar tidak berurutan yang ditambahkan di dalam elemen pembungkus yang ditentukan, yang dapat digunakan untuk menampilkan data laporan. Mengembalikan ID daftar.
    square.js => mengandung
	- name => konstanta yang berisi string 'kotak'.
	- draw() => menggambar kotak pada kanvas tertentu, dengan ukuran, posisi, dan warna yang ditentukan. Mengembalikan objek yang berisi ukuran, posisi, dan warna kotak.
 	- reportArea() => Menulis luas kuadrat ke daftar laporan tertentu, mengingat panjangnya.
	- reportPerimeter() => menulis perimeter persegi ke daftar laporan tertentu, mengingat panjangnya.

2. mengeksport fitur modul
Cara yang lebih mudah untuk mengekspor semua barang yang ingin Anda ekspor adalah dengan menggunakan satu pernyataan ekspor di akhir file modul Anda, diikuti dengan daftar fitur yang ingin dipisahkan dengan koma yang ingin Anda ekspor terbungkus dalam kurung kurawal. 
Sebagai contoh:
export { name, draw, reportArea, reportPerimeter };

3. mengimport file ke skrip yang dibuat 
Setelah Anda mengekspor beberapa fitur dari modul Anda, Anda perlu mengimpornya ke skrip Anda untuk dapat menggunakannya. 
Cara paling sederhana untuk melakukan ini adalah sebagai berikut:

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

menggunakan pernyataan import ini diikuti oleh daftar fitur yang ingin digunakan berada di kurung kurawal
dan diikuti lagi url tempat  dari skrip yzng ingin dipanggil dengan menggunakan awalan sintak dot(.)
agar memudahjkan sehingga tidak panjang urlnya



4. menerapkan module di file HTML
dengan menggunakan perintah 
<script type="module" src="main.js"></script>

ket : main.js ini adalah file yang merupakan file intinya

5. export untuk sebuah default
disini ada export yang khusus menjadi sebuah default
pada main.js nya ingin mengekspor ini sebagai default kami, jadi di bagian 
bawah file kami menulis ini:
export default randomSquare; => pada file yang ada function yanga akan dijadikan sebagai defaultnya

Sebagai gantinya, kami dapat menambahkan export default fungsi ke dan 
mendefinisikannya sebagai fungsi anonim, seperti ini:
export default function(ctx) {
  ...
}

Di dalam main.js file kami , kami mengimpor fungsi default menggunakan baris ini:
import randomSquare from './modules/square.js';

Sekali lagi, perhatikan kurangnya kurung kurawal. Ini karena hanya ada satu 
ekspor standar yang diperbolehkan per modul, dan kami tahu itu randomSquare saja. 
Baris di atas pada dasarnya adalah singkatan untuk:

import {default as randomSquare} from './modules/square.js';

6. menghindari konflik dari kesamaan nama function yang ada
ketika kita memiliki module untuk menampilkan gambar bangun seperti segita dsb
akan ada beberapa fungsi yang sama seperti draw(),reportArea() sehingga takut terjadi konflik
maka untuk mengatasinya ada beberapa cara yaitu sbb :
- menggnati nama import dan eksport
Di dalam kurung kurawal importdan exportpernyataan Anda, Anda dapat menggunakan kata kunci as bersama 
dengan nama fitur baru, untuk mengubah nama pengenal yang akan Anda gunakan untuk fitur di dalam modul tingkat atas.
sintaks penulisan :
kedua hal berikut ini akan melakukan pekerjaan yang sama, meskipun dengan cara yang sedikit berbeda:

// inside module.js
export {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName
};

// inside main.js
import { newFunctionName, anotherNewFunctionName } from './modules/module.js';

atau

// inside module.js
export { function1, function2 };

// inside main.js
import { function1 as newFunctionName,
         function2 as anotherNewFunctionName } from './modules/module.js';

contoh raelnya :
// in square.js
export { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter };
// in main.js
import { squareName, drawSquare, reportSquareArea, reportSquarePerimeter 


- membuat objek modul
Metode di atas berfungsi dengan baik, tetapi agak berantakan dan panjang lebar. 
Solusi yang lebih baik lagi adalah mengimpor fitur setiap modul di dalam objek 
modul. Bentuk sintaks berikut melakukan itu:
import * as Module from './modules/module.js';

Ini mengambil semua ekspor yang tersedia di dalam module.js, dan membuatnya 
tersedia sebagai anggota suatu objek Module, secara efektif memberinya namespace 
sendiri. Jadi misalnya:

Module.function1()
Module.function2()
etc.

contoh real :
export { name, draw, reportArea, reportPerimeter };
Impor di sisi lain terlihat seperti ini:

import * as Canvas from './modules/canvas.js';

import * as Square from './modules/square.js';
import * as Circle from './modules/circle.js';
import * as Triangle from './modules/triangle.js';

Dalam setiap kasus, Anda sekarang dapat mengakses impor modul di bawah nama 
objek yang ditentukan, misalnya:

let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
Jadi sekarang Anda dapat menulis kode sama seperti sebelumnya 
(selama Anda menyertakan nama objek di mana diperlukan), dan impor jauh lebih rapi.

- module dan class
digunakan apabila kode pada module menggunakan berorientasi objek
dan pada module dibuat semua function dijadikan class
sintaks nya :
class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}
export { Square }

lalu pada file main.js nya gunakan sintaks dibawah ini :
import { Square } from './modules/square.js';

Dan kemudian gunakan kelas untuk menggambar kotak kami:

let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();

- modul agregat
apabila pada module ada sub module maka gunakan sintaks ini untuk dapat 
mengexport dan import dengan format sintaks dibawah ini :

export * from 'x.js'
export { name } from 'x.js'

real nya pada file module nya:
export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';

lalu pada file main.js nya :
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
import { Triangle } from './modules/triangle.js';

atau dengan baris tunggal berikut:

import { Square, Circle, Triangle } from './modules/shapes.js';

- membuat modul dinamis
Bagian terbaru dari fungsionalitas modul JavaScript yang akan tersedia di browser adalah pemuatan modul dinamis. 
Ini memungkinkan Anda untuk memuat modul secara dinamis hanya saat dibutuhkan, daripada harus memuat semuanya di muka. 
Ini memiliki beberapa keunggulan kinerja yang jelas; mari baca terus dan lihat cara kerjanya.
	Fungsionalitas baru ini memungkinkan Anda memanggil import()sebagai fungsi, meneruskannya jalur ke modul sebagai parameter. 
Ini mengembalikan a Promise, yang memenuhi dengan objek modul (lihat Membuat objek modul ) memberi Anda akses ke ekspor objek itu, misalnya

import('./modules/myModule.js')
  .then((module) => {
    // Do something with the module.
  });

Mari kita lihat sebuah contoh. Dalam direktori dinamis-modul-impor kita punya contoh lain berdasarkan contoh kelas kita. 
Namun kali ini kita tidak menggambar apa pun di kanvas ketika contoh dimuat. Sebagai gantinya, kami menyertakan tiga tombol 
"Lingkaran", "Kotak", dan "Segitiga" yang ketika ditekan, secara dinamis memuat modul yang diperlukan dan kemudian menggunakannya 
untuk menggambar bentuk yang terkait.

Dalam contoh ini kami hanya membuat perubahan pada file index.html dan kami main.js 
ekspor modul tetap sama seperti sebelumnya.
Selama di main.js kami telah mengambil referensi ke setiap tombol menggunakan 
Document.querySelector()panggilan, misalnya:

let squareBtn = document.querySelector('.square');

Kami kemudian melampirkan pendengar acara ke setiap tombol sehingga ketika ditekan, 
modul yang relevan dimuat secara dinamis dan digunakan untuk menggambar bentuk:

squareBtn.addEventListener('click', () => {
  import('./modules/square.js').then((Module) => {
    let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  })
});
Perhatikan bahwa, karena pemenuhan janji mengembalikan objek modul, kelas kemudian dibuat subfeature objek, 
maka kita sekarang perlu mengakses konstruktor dengan Module.menambahkan sebelumnya, misalnya Module.Square( ... ).


7. Dasar-dasar modul ES6 



Apa itu modul?
Modul hanyalah sebuah file. Satu skrip adalah satu modul.
Modul dapat memuat satu sama lain dan menggunakan arahan khusus export dan import
untuk bertukar fungsi, memanggil fungsi dari satu modul dari yang lain:

export label kata kunci variabel dan fungsi yang harus dapat diakses dari luar modul saat ini.
import memungkinkan impor fungsionalitas dari modul lain.