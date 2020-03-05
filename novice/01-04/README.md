Jenis String JavaScript digunakan untuk merepresentasikan data tekstual. 
Ini adalah satu set "elemen" dari nilai integer 16-bit unsigned (unit kode UTF-16). 
Setiap elemen dalam String menempati posisi dalam String. Elemen pertama adalah pada indeks 0, selanjutnya pada indeks 1, dan seterusnya. Panjang suatu String adalah jumlah elemen di dalamnya. 
Anda dapat membuat string menggunakan string literal atau objek string.

angka hexadesimal diberi tanda \x


Objek String adalah pembungkus di sekitar tipe data primitif string.

const foo = String baru ('foo'); // Membuat objek String
console.log (foo); // Menampilkan: [String: 'foo']
typeof foo; // Mengembalikan 'objek'

Anda dapat memanggil salah satu metode objek String pada nilai literal string — JavaScript secara otomatis mengubah string literal menjadi objek String sementara, memanggil metode tersebut, lalu membuang objek String sementara. Anda juga bisa menggunakan properti String.length dengan string literal.

Anda harus menggunakan string literal kecuali Anda secara khusus perlu menggunakan objek String, karena objek String dapat memiliki perilaku berlawanan dengan intuisi. Sebagai contoh:

const firstString = '2 + 2'; // Membuat nilai string literal
const secondString = String baru ('2 + 2'); // Membuat objek String
eval (firstString); // Mengembalikan nomor 4
eval (secondString); // Mengembalikan string "2 + 2"

Objek String memiliki satu properti, panjang, yang menunjukkan jumlah unit kode 
UTF-16 dalam string. Misalnya, kode berikut memberikan helloLength nilai 13, 
karena "Halo, Dunia!" memiliki 13 karakter, masing-masing diwakili oleh satu 
unit kode UTF-16. Anda dapat mengakses setiap unit kode menggunakan gaya braket 
array. Anda tidak dapat mengubah karakter 
individual karena string adalah objek mirip array yang tidak dapat diubah:


Karakter yang nilai skalar Unicodenya lebih besar dari U + FFFF (seperti beberapa karakter Cina / Jepang / Korea / Vietnam yang langka dan beberapa emoji) disimpan di UTF-16 dengan masing-masing dua unit kode pengganti. Misalnya, string yang berisi karakter tunggal U + 1F600 "Wajah menyeringai Emoji" akan memiliki panjang 2. Mengakses unit kode individual dalam string tersebut menggunakan tanda kurung mungkin memiliki konsekuensi yang tidak diinginkan seperti pembentukan string dengan unit kode pengganti yang tak tertandingi, di pelanggaran standar Unicode. (Contoh harus ditambahkan ke halaman ini setelah bug MDN 857438 diperbaiki.) Lihat juga String.fromCodePoint () atau String.prototype.codePointAt ().

Objek String memiliki beragam metode: misalnya metode yang mengembalikan variasi pada string itu sendiri, seperti substring dan toUpperCase.

Tabel berikut merangkum metode objek String.

Kembalikan karakter atau kode karakter pada posisi yang ditentukan dalam string.

Kembalikan posisi substring yang ditentukan dalam string atau posisi terakhir 
dari substring yang ditentukan, masing-masing.

Mengembalikan apakah string dimulai, diakhiri atau berisi string yang ditentukan.

Menggabungkan teks dari dua string dan mengembalikan string baru

Membangun string dari urutan nilai Unicode yang ditentukan. Ini adalah metode kelas String, bukan instance String.

Membagi objek String menjadi array string dengan memisahkan string menjadi substring.

Ekstrak bagian string dan mengembalikan string baru.

Kembalikan subset string yang ditentukan, baik dengan menentukan indeks awal dan akhir atau indeks awal dan panjang.

Bekerja dengan ekspresi reguler.

Kembalikan string dalam semua huruf kecil atau semua huruf besar, masing-masing

Mengembalikan Bentuk Normalisasi Unicode dari nilai string panggilan.

Mengembalikan string yang terdiri dari elemen-elemen objek diulangi waktu yang diberikan.


Multi-line template literals
Literal templat adalah literal string yang memungkinkan ekspresi tersemat. Anda dapat menggunakan fitur multi-line string dan interpolasi string.

Literal templat terlampir oleh tanda centang-kembali (``) (aksen kubur) alih-alih tanda kutip ganda atau tunggal. Literal templat dapat berisi tempat penampung. Ini ditunjukkan oleh tanda Dollar dan kurung kurawal ($ {ekspresi}).
Potong spasi putih dari awal dan akhir string.

multi-lines
Setiap karakter baris baru yang dimasukkan dalam sumber adalah bagian dari templat literal. Menggunakan string normal, Anda harus menggunakan sintaks berikut untuk mendapatkan string multi-line:

console.log ('string text line 1 \ n \
string text line 2 ');


- Internationalization
Objek Intl adalah namespace untuk ECMAScript Internationalisasi API, yang 
menyediakan perbandingan string sensitif bahasa, pemformatan angka, dan 
pemformatan tanggal dan waktu. Konstruktor untuk objek Collator, NumberFormat, 
dan DateTimeFormat adalah properti dari objek Intl.
. Date and time formatting
Objek DateTimeFormat berguna untuk memformat tanggal dan waktu. Berikut ini format tanggal untuk bahasa Inggris seperti yang digunakan di Amerika Serikat. (Hasilnya berbeda di zona waktu lain.)
. Number formatting
objek NumberFormat berguna untuk memformat angka
. collation
Objek Collator berguna untuk membandingkan dan menyortir string.

Misalnya, sebenarnya ada dua jenis urutan berbeda dalam bahasa Jerman, buku telepon dan kamus. Sortir buku telepon menekankan suara, dan seolah-olah "ä", "ö", dan seterusnya diperluas ke "ae", "oe", dan seterusnya sebelum disortir.

