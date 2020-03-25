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
    
    penjelasan :
    - ele => Elemen induk dari childEle.
    - childEle => Elemen anak dari ele.
    Contoh Kode
    Dalam contoh ini, kami menghapus <strong>elemen yang kami tambahkan sebagai anak ke <div>tag di Contoh Kode untuk appendChild()metode sebelumnya .

            div.removeChild(strong);

8. replaceChild()
    replaceChild() adalah method untuk memanipulasi node pada DOM,yang berguna untuk menggantikan elemen anak dengan satu sama lain

    sintaks nya adalah :
    ele.replaceChild(newChildEle, oldChileEle)

    penjelasan :
    - ele => Elemen induk yang anak-anak harus diganti.
    - newChildEle => Elemen anak eleyang akan diganti oldChildEle.
    - oldChildEle => Elemen anak ele, yang akan diganti oleh newChildEle.

    Contoh Kode program :
    Dalam contoh ini elemen <strong>turunan dari <div>elemen induk diganti dengan <em> tag yang baru dibuat .

            HTML
            <div>
            <strong>hello</strong>
            </div>

            JavaScript
            var em = document.createElement('em');
            var strong = document.querySelector('strong');
            var div = document.querySelector('div');
            em.textContent = 'hi';
            div.replaceChild(em, strong);
    
9. cloneNode()
        cloneNode() adalah sebuah methon pada DOM untuk proses mengcopy atau menduplikat/menyalin sebuah elemen/kata atau data yg ada

        sintaks nya adalah :
        var dupeEle = ele.cloneNode([deep])

        penjelasan :
        - dupeEle => Salinan eleelemen.
        - ele => Elemen HTML yang akan disalin.
        - deep => (opsional) Nilai boolean. Jika diatur ke true, dupeEleakan memiliki semua elemen anak ele, jika diatur untuk falseitu akan dikloning tanpa anak-anaknya.

        Contoh Kode program :
        Dalam contoh ini, kami membuat salinan untuk <strong>elemen dengan cloneNode(), kemudian kami menambahkannya ke <div>tag sebagai elemen anak dengan appendChild()metode yang disebutkan di atas .

        Akibatnya, <div>akan mengandung dua <strong>elemen, baik dengan hellostring sebagai konten.

            HTML
            <div>
            <strong>hello</strong>
            </div>

            JavaScript
            var strong = document.querySelector('strong');
            var copy = strong.cloneNode(true);
            var div = document.querySelector('div');
            div.appendChild(copy);

10. insertBefore()
        insertBefore adalah sebuah method DOM yang digunakan untuk menyisipkan atau menambahkan sebuah elemen baru sebelum child element sama seperti appendChild namun method ini untuk menyisipkan atau menambahkan sebuah element di akhir child nya pada elemen parent

        sintaks nya adalah :
        ele.insertBefore(newEle, refEle);
        penjelasan :
        - ele => Elemen induk.
        - newEle => Elemen HTML baru yang akan dimasukkan.
        - refEle => Elemen anak ele sebelumnya yang newEle akan dimasukkan.

        Contoh Kode program :
        Dalam contoh ini, kita membuat baru <em>elemen dengan beberapa di dalam teks, dan menambahkannya sebelum para <strong>elemen di dalam <div>elemen induk.

            HTML
            <div>
            <strong>hello</strong>
            </div>

            JavaScript
            var em = document.createElement('em');
            var strong = document.querySelector('strong');
            var div = document.querySelector('div');
            em.textContent = 'hi';
            div.insertBefore(em, strong);

11. createDocumentFragment()
        createDocumentFragment yang pada dasarnya adalah simpul DOM yang bukan bagian dari pohon DOM di mana kita dapat menambahkan dan menyimpan elemen lain (misalnya beberapa baris) terlebih dahulu, sebelum menambahkannya ke node yang diinginkan di pohon DOM (misalnya ke sebuah tabel).

        Sintaks nya adalah :
        document.createDocumentFragment()

        Contoh Kode program :
        Dalam contoh ini, kami membuat beberapa baris tabel dan sel dengan createElement()metode, lalu menambahkannya ke DocumentFragmentobjek, akhirnya menambahkan fragmen dokumen ke HTML <table>menggunakan appendChild()metode.
        Hasilnya, lima baris - masing-masing berisi satu sel dengan angka dari 1 hingga 5 sebagai konten - akan dimasukkan ke dalam tabel.

            HTML
            <table></table>

            JavaScript
            var table = document.querySelector("table");
            var df = document.createDocumentFragment();
            
            for(var i=0; i<5; i++) {
            var td = document.createElement("td");
            var tr = document.createElement("tr");
            td.textContent = i;
            tr.appendChild(td)
            df.appendChild(tr);
            }
            
            table.appendChild(df);

12. getComputedStyle()
        getComputedStyle adalah memeriksa nilai properti CSS suatu elemen sebelum membuat perubahan apa pun. Anda dapat menggunakan ele.styleproperti untuk melakukan hal yang sama, namun getComputedStyle() metode ini dibuat hanya untuk tujuan ini, ini mengembalikan nilai yang dihitung hanya baca dari semua properti CSS elemen HTML yang ditentukan.

        Sintaks nya adalah :
        var style = getComputedStyle(ele, [pseudoEle])

        penjelasan ;
        style- CSSStyleDeclarationObjek yang dikembalikan oleh metode. Ini menampung semua properti CSS dan nilai-nilai eleelemen tersebut.
        ele - Elemen HTML yang mengambil nilai properti CSS.
        pseudoEle- (opsional) String yang mewakili elemen pseudo (misalnya, ':after'). Jika ini disebutkan, maka properti CSS dari elemen pseudo-spesifik yang ditentukan eleakan dikembalikan.

        Contoh Kode program :
        Dalam contoh ini, kami mendapatkan dan mengingatkan nilai yang dihitung widthdari suatu <div>elemen dengan menggunakan getComputedStyle()metode ini.

                HTML
                <div></div>

                JavaScript
                var style = getComputedStyle(document.querySelector('div'));
                alert(style.width);

13. setAttribute()
        setAttribute adalah method DOM untuk menambahkan atribut baru untuk sebuah elemen HTML, atau memperbarui nilai dari atribut yang sudah ada.kode diatas adalah menambhkan atribut dengan nama contenteditable di sebelah atribut div

        Sintaks nya adalah :
        ele.setAttribute(name, value);

        penjelasan :
        - ele => Elemen HTML tempat atribut ditambahkan, atau atribut mana yang diperbarui.
        - name => Nama atribut.
        - value => Nilai atribut.

        Contoh Kode program :
        Dalam contoh ini, kita menambahkan contenteditableatribut ke a <div>dengan memanfaatkan setAttribute()metode, yang akan mengubah kontennya dapat diedit.

                HTML
                <div>hello</div>

                JavaScript
                var div = document.querySelector('div');
                div.setAttribute('contenteditable', '')

14. getAttribute()
        getAttribute adalah sebuah method mengembalikan nilai atribut tertentu milik elemen HTML tertentu. atau mengetahui isi atau keterangan dari sebuah atribut pada elemen html

        Sintaks nya adalah :
        ele.getAttribute(name);

        penjelasan :
        - ele => Elemen HTML dari atribut yang diminta.
        - name => Nama atribut.

        Contoh Kode program :
        Dalam contoh ini, kami mengingatkan nilai contenteditableatribut yang dimiliki <div>elemen dengan bantuan getAttribute()metode.

                HTML
                <div contenteditable=true>hello</div>

                JavaScript
                var div = document.querySelector('div');
                alert(div.getAttribute('contenteditable'))

15. removeAttribute()
        removeAttribute adalah sebuah method yang berfungsi untuk menghapus sebuah atribut dari elemen HTML tertentu, Dalam contoh ini, kami menghapus contenteditable atribut dari elemen <div>.

        Sintaks nya adalah :
        ele.removeAttribute(name);

        penjelasan :
        - ele => Elemen HTML yang atributnya akan dihapus.
        - name => Nama atribut.

        Contoh Kode program
        Dalam contoh ini, kami menghapus contenteditableatribut dari <div>elemen. Akibatnya, <div>tidak akan dapat diedit lagi.

                HTML
                <div contenteditable=true>hello</div>

                JavaScript
                var div = document.querySelector('div');
                div.removeAttribute('contenteditable');