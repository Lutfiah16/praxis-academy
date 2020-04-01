Judul Materi : pengenalan vue.js(2)

Nama : Lutfiah Atsari Sujud

Tanggal : 01 April 2020


Component
Untuk menggunakan komponen ini dalam templat, mereka harus didaftarkan agar Vue tahu tentang mereka. Ada dua tipe untuk mendaftarkan: global dan local. Sejauh ini, Kita hanya mendaftarkan komponen secara global, menggunakan Vue.component:

        Vue.component('my-component-name', {
        // ... opsi ...
        })

Komponen yang terdaftar secara global dapat digunakan dalam templat dari instance Vue Root (new Vue) yang dibuat setelahnya – dan bahkan di dalam semua sub komponen dari pohon komponen Vue instance.

Itu saja yang perlu Anda ketahui tentang pendaftaran untuk saat ini, tetapi setelah selesai membaca halaman ini dan merasa nyaman dengan isinya, kami sarankan untuk kembali lagi nanti untuk membaca panduan lengkap tentang Mendaftarkan Komponen.



Transition 
Ada enam kelas yang diterapkan untuk transisi masuk/keluar.

1. v-enter: State (keadaan) awal untuk proses masuk. Ditambahkan sebelum elemen dimasukkan, dilepaskan satu frame setelah elemen dimasukkan.
2. v-enter-active: State aktif untuk proses masuk. Diaplikasikan ketika seluruh fase proses transisi masuk. Ditambahkan sebelum elemen dimasukkan, dilepaskan ketika transisi/animasi selesai. Kelas ini dapat digunakan untuk menentukan durasi, penundaan (delay) dan kurva pelonggaran (easing curve) untuk transisi masuk.
3. v-enter-to: Hanya tersedia pada versi 2.1.8+. State akhir untuk proses masuk. Ditambahkan satu frame setelah elemen dimasukkan (pada saat yang sama v-enter dilepaskan), dilepaskan ketika transisi/animasi selesai.
4. v-leave: State awal untuk proses keluar. Ditambahkan secepatnya ketika transisi keluar dipicu, dilepaskan setelah satu frame.
5. v-leave-active: State aktif untuk proses keluar. Diaplikasikan ketika seluruh proses transisi keluar. Ditambahkan secepatnya ketika transisi keluar dipicu, dilepaskan ketika transisi/animasi selesai. Kelas ini dapat digunakan untuk menentukan durasi, penundaan (delay) dan kurva pelonggaran (easing curve) untuk transisi kaluar.
6. v-leave-to: Hanya tersedia pada versi 2.1.8+. State akhir untuk proses keluar. Ditambahkan satu frame setelah transisi keluar dipicu (pada saat yang sama v-leave dilepaskan), dilepaskan ketika transisi/animasi selesai.

Setiap kelas ini akan diawali dengan nama transisi. Di sini awalan v- adalah default jika Anda menggunakan elemen <transition> tanpa nama. Sebagai contoh jika Anda menggunakan <transition name="my-transition">, maka sebagai gantinya kelas v-enter akan menjadi my-transition-enter.
v-enter-active dan v-leave-active memberikan Anda kemampuan untuk menentukan kurva pelonggaran yang berbeda untuk transisi masuk/keluar, yang mana akan dapat Anda lihat contohnya pada bagian berikutnya.