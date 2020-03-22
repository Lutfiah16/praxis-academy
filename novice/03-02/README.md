judul materi : Web API
nama : Lutfiah Atsari Sujud
Tanggal : 19 Maret 2020


menggunakan fetch api =>
merupakan sebuah method pada api javascript untuk mengambil resources dari jaringan dan 
mengembalikan promise yang selesai (fullfilled) ketika ada respons yang tersedia

syntact untuk fetch ini adalah sebagai berikut :
fetch (resources,init)
.then (function(response){
})
.catch (function(error){
});


pada resourse nya bisa berupa :
- URL => alamat dari sumber yang kita akan ambil
- Request Object => representasi permintaan sumber
namun yang biasa digunakan hanya yang URL saja

pada init => optional : terkadang digunakan atau tidak
dan init ini merupakan konfigurasi tambahan pada sebuah request berbentuk objek yang terdiri dari :
- method
- header
- body
- mode
- cache
- referrer
- referrerPolicy
- integrity
- keepalive
- signal

pada response teridiri dari property dan method
property terdiri dari :
- header 
- ok
- redirected
- status
- statusText
- type
- url
- body 
method terdiri dari :
- clone()
- error()
- redirect()
- blob()
- fromData() => perintah untuk mengupload sebuah file
- json()
- text()

kalau element nya satu saja pada data tersebut gunsksn querySelector kalau bnyak
menggunakan querySelectorAll akan menghasilkan nodelist(antarmuka browser) atau array
