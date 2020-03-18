judul materi : error handling
nama : Lutfiah Atsari sujud
tanggal : 18 Maret 2020



try => pernyataan yang akan dieksekusi
catch => tempat pengecualian jika terjadi error
finally => dilakukan setelah try di eksekusi telah selesai


kode try akan dijalankan ,jika tidak ada kesalahan maka kondisi catch diabaikan 
jika terjadi kesalahan maka try dihentikan dan akan dialirkan ke kondisi pada catch


jika perintah setTimeout didalam sebuah kondisi try maka program tak kan berjalan
seharusnya setTimeout berada diluar dan kondisi try dan catch nya terdapat didalam nya

pada pendeteksi kesalahan menggunakan catch harus ditandai keterangan ttg sebuah kesalahan nya
dengan perintah 
. name => Nama kesalahan. Misalnya, untuk variabel yang tidak terdefinisi "ReferenceError".
. message => Pesan teks tentang detail kesalahan.
. stack => Tumpukan panggilan saat ini: string dengan informasi tentang urutan panggilan 
bersarang yang menyebabkan kesalahan. Digunakan untuk keperluan debugging.

catch ini digunakan untuk memberi sebuah pesan apabila terjadi sebuah error agar 
pengguna mengetahui apa yang terjadi

throw => operator yang menghasilkan sebuah kesalahan

disaat kita memiliki sebuah array yang tidak memiliki nama maka akan diberi keterangan
kesalahan nya pada proses try tersebut
throwoperator menghasilkan SyntaxErrordengan diberikan message, cara yang sama seperti JavaScript akan menghasilkan itu sendiri. 
Eksekusi trysegera berhenti dan aliran kontrol melompat ke catch.
Sekarang catch menjadi satu tempat untuk semua penanganan kesalahan: baik untuk 
JSON.parsedan kasus lainnya.


rethrowing
adalah sebuah operator kesalahan
Teknik "rethrowing" dapat dijelaskan secara lebih rinci sebagai:

Catch mendapatkan semua kesalahan.
Di catch(err) {...}blok kami menganalisis objek kesalahan err.
Jika kita tidak tahu bagaimana menanganinya, kita tahu throw err.

The try..catchmembangun mungkin memiliki satu lagi kode klausa: finally.

Jika ada, itu berjalan dalam semua kasus:

setelah itu try, jika tidak ada kesalahan,
setelah itu catch, jika ada kesalahan.
Sintaks yang diperluas terlihat seperti ini:

try {
   ... try to execute the code ...
} catch(e) {
   ... handle errors ...
} finally {
   ... execute always ...
}


penjelasan untuk latihan 
Kode program pertama :
Penjelasan => 
function proses(){
try {
    alert("mulai");
    return "result";
} catch (err){
    alert(alert.message);
} finally{
    alert("Selesai");
}
}
proses();
pada program diatas adalah dimana telah membaca kondisi dari try
maka akan lari ke proses finally dikarenakan suatu kondisi try tidak error maka tidak melewati
proses pada catch nya


Kode program kedua :
Penjelasan =>
function proses(){
    try {
        alert("mulai");
        throw new error("Error!!");
    } catch (e){
        if("can't handle the error") {
	throw e;
        }
    } finally{
        alert("Selesai");
    }
    }
    proses();

    //kodingan yang diatas ini bila menggunakan sebuah operator throw maka 
    //hanya menampilkan saja try yang mulai lalu langsung finally 
    //stelah itu akan tidak terjadi apa2