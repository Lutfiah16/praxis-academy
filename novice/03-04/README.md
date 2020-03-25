Judul Materi : DOM Lanjut
Nama : Lutfiah Atsari Sujud
Tanggal : 25 Maret 2020

15 Metode javascript untuk memanipulasi DOM untuk pengembangan Web

yang memiliki nya sebagai berikut :
1. querySelector()
    querySelector adalah method yang digunakan untuk mencari element berdasarkan selector dengan sebuah css, dan hanya membaca instance pertama dari semua elemen yg ada yang dihasilkan dari method ini adalah NodeList

    sintaks nya adalah :
    var ele = document.querySelector(selector);
    
    penjelasan :
    - ele => Elemen pencocokan pertama atau null(jika tidak ada elemen yang cocok dengan pemilih)
    - selector => satu atau lebih CSS penyeleksi, seperti "#fooId", ".fooClassName", ".class1.class2", atau".class1, .class2"

    contoh kode program :
    Dalam contoh ini, yang pertama <div> dipilih dengan querySelector()metode dan warnanya diubah menjadi merah.

    HTML
    <p>paragraph one</p>
    <p>paragraph two</p>
    <div>div one</div>
    <p>paragraph three</p>
    <div>div two</div>

    JavaScript
    var firstDiv = document.querySelector('div');
    firstDiv.style.color = 'red';

2. querySelectorAll()
    querySelectorAll adalah method yang digunakan untuk mencari semua element berdasarkan selector yang di
    panggil dan mengubahnya  dengan sebuah css.

    sintaks nya adalah :
    var eles = document.querySelectorAll(selector);

    penjelasan :
    - eles => NodeListObjek dengan semua elemen yang cocok sebagai nilai properti. Objek kosong jika tidak ada kecocokan yang ditemukan.
    - selector => satu atau lebih CSS penyeleksi, seperti "#fooId", ".fooClassName", ".class1.class2", atau".class1, .class2"

    contoh kode program :
    Contoh di bawah ini menggunakan HTML yang sama dengan yang sebelumnya. Namun, dalam contoh ini, semua paragraf dipilih dengan querySelectorAll(), dan berwarna biru.

    HTML
        <p>paragraph one</p>
        <p>paragraph two</p>
        <div>div one</div>
        <p>paragraph three</p>
        <div>div two</div>

    Javascript 
     var paragraphs = document.querySelectorAll('p');
            for(var p of paragraphs)
            p.style.color = 'blue';

3. addEventListener()
    addEventListener adalah method pada DOM yang digunakan untuk menambhkan sebuah event pada element html semisal mengklik, fokus, atau memuat, yang dapat kami bereaksi dengan JavaScript

    sintak nya adalah :
    ele.addEventListener(evt, listener, [options]);

    penjelasan :
    - ele => Elemen HTML yang akan didengar pendengar acara.
    - evt => Acara yang ditargetkan.
    - listener => Biasanya, fungsi JavaScript.
    - options => (opsional) Objek dengan sekumpulan properti  boolean (tercantum di bawah).

    contoh kode program :
    Dalam contoh ini, kami menambahkan pendengar peristiwa klik yang dipanggil foo, ke <button> tag HTML.

    HTML 
        <button>Click Me</button>

    Javascript
    var btn = document.querySelector('button');
            btn.addEventListener('click',foo);
            function foo() { alert('hello'); }

4. removeEventListener()
    removeEventListener adalah method pada DOM yang digunakan untuk menghapus sebuah event yang telah di buat semisa; diatas adalah kode menghapus fungsi onclick nya pada buttonnya

    sintaks nya adalah :
    ele.removeEventListener(evt, listener, [options]);

    penjelasan :
    Menggunakan sintaks yang sama dengan addEventListener()metode yang disebutkan di atas (kecuali untuk onceopsi yang dikecualikan). Opsi ini digunakan untuk sangat spesifik tentang mengidentifikasi pendengar yang akan dilepaskan.

    contoh kode program :
    Mengikuti Contoh Kode yang kami gunakan di addEventListener()sini, di sini kami menghapus pendengar peristiwa klik yang dipanggil foodari <button> elemen.

    HTML
    <button>Click Me</button>

    Javascript
        var btn = document.querySelector('button');
            btn.addEventListener('click',foo);
            function foo() { alert('hello'); }
        btn.removeEventListener('click', foo);

5. createElement()
    createElement adalah method untuk membuat sebuah element dan dapat berupa apapun.

    sintak nya adalah :
    document.createElement(tagName);

    penjelasan :
    tagName - Nama tag HTML yang ingin Anda buat.

    Contoh Kode program :
    Dengan contoh berikut, Anda bisa membuat elemen paragraf baru:
    var pEle = document.createElement('p')

6. appendChild()
    appendChild adalah sebuah method yang digunakan untuk
    memindahkan isi ke tempat seharusnya (simpan ke akhir dari sebuah element parent)

    sintaks nya adalah :
    ele.appendChild(childEle)

    penjelasan :
    - ele => Elemen HTML yang childEleditambahkan sebagai anak terakhir.
    - childEle => Elemen HTML ditambahkan sebagai anak terakhir dari ele.

    contoh kode program :
    Dalam contoh ini, kami menyisipkan <strong>elemen sebagai anak <div>elemen dengan menggunakan appendChild()dan createElement()metode yang disebutkan sebelumnya .

    HTML
    <div></div>

    Javascript
    var div = document.querySelector('div');
    var strong = document.createElement('strong');
    strong.textContent = 'Hello';
    div.appendChild(strong);

7. removeChild()
    removeChild adalah sebuah method DOM yang digunakan untuk menghapus element anak tertentu dari elemen HTML yang memanggil metode ini, dari kode diatas kami menghapus <strong> elemen yang kami tambahkan sebagai anak ke <div> tag di Contoh Kode untuk appendChild() metode sebelumnya .
    
    Sintaksis
    ele.removeChild(childEle)
    ele- Elemen induk dari childEle.
    childEle- Elemen anak dari ele.
    Contoh Kode
    Dalam contoh ini, kami menghapus <strong>elemen yang kami tambahkan sebagai anak ke <div>tag di Contoh Kode untuk appendChild()metode sebelumnya .

    div.removeChild(strong);