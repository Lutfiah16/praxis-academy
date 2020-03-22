Judul Materi : Manipulasi DOM(Document Object Model)
Nama : Lutfiah Atsari Sujud
Tanggal : 22 Maret 2020

- pengertian DOM
1. antarmuka pemrograman untuk HTML yang mempresentasikan halaman web,sehingga 
program dapat mengubah dan memanipulasi strukturnya
2. representasi elemen html pada dokumen menjadi sebuah object 
3. antarmuka pemrograman berbasis objek yang mempresentasikan dokumen web
menggabungkan javascript dengan sebuah HTML
4. DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi
komponen nya terdiri dari : elemen HTML,Atribut,Text,dll
5. DOM dapat dimanipulasi (dibuat ,diubah,dihapus) menggunakan javascript

- Materi DOM antara lain sbb :
1. DOM Selection
	adalah menyeleksi atau mengakses memilih sebuah element yg ada didalam 
dokumen menggunakan javascript
2. DOM Manipulasi
	adalah manipulasi element HTML dengan nambah DOM dengan menambah element baru dan mengubah
3. DOM traversal
	adalah menelusuri element html lewat element html lain
4. Event Handling


- konsep DOM adalah 
	DOM tree adalah representasi element html didalam sebuah browser
tiap-tiap node memiliki tipe yaitu sebuah elemen seperti => <p>,<h1>,<a> dan lain sebagainya
Struktur hirarki DOM tree
- root node => node yang menjadi sumber dari semua node lain didalam DOM yg secara default adalah document
- parent node => node yg berada 1 tingkat diatas node yang lain
- child node => node yg berada satu tingkat dibawah node yang lain dan tidak peduli tipe data nya
 
- tipe-tipe node adalah
1. elemen
2. atribut
3. text
4. cdata section
5. entity reference
6. entity
7. processing instruction
8. comment
9. document
10. document type
11. document fragment
12. notation
namun yang umum digunakan adalah elemen,text dan document
	pada DOM ini memiliki dua jenis tampilan yaitu sebagai berikut :
1. nodelist => jika memilih lebih dari satu node dan tak peduli type nodenya
2. HTMLcollection => kumpulan node yg khusus type element html saja

- nodeList vs HTMLcollection
1. keduanya merupakan kumpulan node
2. struktur datanya mirip array 
3. nodelist dapat berisi node apapun,sedangkan htmlcollection harus berisi element HTMl
4. htmlcollection bersifat live sedangkan nodelist tidak

penjelasan 
1. DOM Selection
memilih elemen elemen pada DOM menggunakan javascript dan tahap awal dari DOM amnipulasi

=> ada beberapa method atau fungsi di dom selection ini adalah
a. getElementById() => memilih elemen yd ada di DOM sesuai no id nya,hanya boleh ada satu id disetiap programnya
	yang dihasilkan dari method ini adalah sebuah element
b. getElementsByTagName() => mencari elemen2 yg memiliki nama text yang tertentu dan kemungkinan banyak
	yang dihasilkan dari method ini adalah HTMLcollection
c. getElementsByClassName() => mencari elemen yg memiliki class tertentu dan class boleh dimiliki lebih dari satu element
	yang dihasilkan dari method ini adalah HTMLCollection
d. querySelector() dan querySelectorAll() => dari kedua ini digunakan untuk mencarielement berdasarkan selector dengan sebuah css
	yang dihasilkan dari method ini adalah NodeList


implementasi pada method yang dijabarkan diatas adalah :
1. file.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dom Selection</title>
  <style>
    * { 
        border: 2px solid #dedede; 
        padding: 15px; 
        margin: 15px; 
    }
    html { 
      margin: 0;
      padding: 0;
    }
    body { 
      max-width: 600px;
      margin: 30px auto;
      font-family: sans-serif;
      color: #333;
    }
  </style>
</head>
<body>

  <h1 id="judul">Hello World</h1>
  <div id="container">
      <section id="a">
          <p class="p1">paragraf 1</p>
          <a href="http://instagram.com/sandhikagalih">Instagram Sandhika Galih</a>
          <p class="p2">paragraf 2</p>
          <p class="p3">paragraf 3</p>
      </section>
       <!--menyeleksi dengan css untuk p dibawah ini maka gunakan #b => sebagai id nya p => class yg dipake pada paragraf4 -->
      <section id="b">
          <p>paragraf 4</p>
           <!--//untuk menampilkan background dari salah satu item dibawah menggunakan css adalah
          //dengan menuliskan posisi item itu sebagai apa sehingga li:nth-child(2) {}
          //atau lebih spesifik adalah section#b ul li:nth-child(2) {}-->
          <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
          </ul>
      </section>
  </div>

<script src="script.js"></script>
</body>
</html>

2. file script.js
script.js

- document.getElementById() => carikan element id nya yg ada didalam document
//kita dapat melakukan apapun dijudulnya
	const judul = document.getElementById('judul'); 
//manipulasi warna tulisan yg id nya judul
	judul.style.color = 'red';
//mengubah warna background
	judul.style.backgroundColor = 'grey';
//mengubah tulisan nya menjadi kata yg berbeda
	judul.innerHTML = 'Lutfiah';


- document.getElementsByTagName() => htmlcollection
//menyelesksi text yg didalam p
	const p = document.getElementsByTagName('p'); //mirip dengan array hasilnya
//mengubah backgroundnya yg element p dengan menuliskan urutan array nya
	p[2].style.backgroundColor = 'lightblue';

//atau pake looping
	for(let i=0; i<p.length; i++){
	p[i].style.backgroundColor = 'lightblue';
	}

//mengambil sebuah element
	const h1 = document.getElementsByTagName('h1')[0]; // yg diambil yg index nya ke nol
	h1.style.fontSize = '50px';


- document.getElementsClassName() => htmlcollection
	const p1 = document.getElementsByClassName('p1');
//ganti tulisannya
	p1[0].innerHTML = 'ini diubah dari javascript';


- document.querySelector() => selector disini adalah css
//menghasilkan element
	const p4 = document.querySelector('#b p');
//mengubah warna tulisan
	p4.style.color = 'green';
	p4.style.fontSize ='30px';
	const li2 = document.querySelector('section#b ul li:nth-child(2)');
	li2.style.backgroundColor = 'orange';

	const p = document.querySelector('p'); //yg dsikembalikan adalah elemen p yg awal saja
// // p.innerHTML = 'ini diubah melalui javascript';

- document.querySelectorAll()=> menjadi nodelist //untuk keseluruhan element p pada html menggunakan 
	const p = document.querySelectorAll('P'); // tampilannya akan nodelist
//untuk mewarnai semua element p nya maka
	p[2].style.backgroundColor ='lightblue';

//untuk mewarnai semua menggunakan looping
	for(let i =0; i < p.length; i++){     
	p[i].style.backgroundColor ='lightblue';
	}

Keterangan :
mana yg terbaik dari 5 method ini itu tergantung dari kasus yg kalian dapatkan dan kebutuhan
method yg cepat adalah getElementById dan getElementsByTagName



//mengubah node root pada paragraf ke 4
//ini dapat diubah dengan querySelectorAll dan getElemntsByTagName
//untuk section b
	const sectionb = document.getElementById('b');
	const p4 = sectionb.querySelector('p');
	p4.style.backgroundColor = 'orange';

//atau dibalik
	const sectionB = document.querySelector('section#b');
	const p4 = sectionB.getElementsByTagName('p')[0];
	p4.style.backgroundColor = 'orange';


2. DOM manipulation
ada dua jenis manipulasi pada DOM ini adalah sbb :
a. manipulasi element
b. manipulasi node => menyisipkan elemen pada halaman

a. manipulasi element
ada beberapa method pada manipulasi element ini yaitu 
1. element.innerHTML => untuk merubah isi dari element yg diseleksi, bisa menambahkan perintah perintah html
2. element.style.<property> => untuk merubah style atau css dari sebuah elemen yg diseleksi
3. element.setAttribute() => untuk memanipulasi atribut
mengelola sebuah atribut terdiri dari tiga yaitu :
- getAttribute() => mengetahui isi dari sebuah atribut yg disebutkan 
- setAttribute() => merubah sebuah atribut yg ada pada element
- removeAttribute() => menghapus sebuah atribut di HTML
4. element.classList => manipulasi class 
memanipulasi class terdiri dari
- element.classList.add() => menambahkan class
- remove() => menghapus class
- toggle() => jika blm memiliki class maka akan menambah nya ,jika sudah maka akan menghapus class yg ada
- item() => untuk mengetahui class tertentu dalam sebuah element, semisal punya 3 class tapi kita mau mengetahui class yg ketiga
- contains() => mengecek ada enggk class tertentu
- replace() => mengganti class yg ada menjadi class baru

Implementasi dari method diatas adalah sbb :
note : menggunakan file HTML yang disebutkan diatas

1.//menggunakan innerHTML
	const judul = document.getElementById('judul');
//mengganti judul dengan text lain yg berada dikotak
	judul.innerHTML = '<em>DOM Manipulation</em>';


//mengganti seluruh isi selection a
	const sectionA = document.querySelector('section#a');
	sectionA.innerHTML = '<div><p>paragraf 1</p></div>';

2. //menggunakan element.Style.<propertycss>
 	const judul = document.querySelector('#judul');
	judul.style.color = 'lightblue';
	judul.style.backgroundColor = 'salmon';

3. //Manipulasi Atribut
- menambahkan atribut
	const judul = document.getElementsByTagName('h1')[0];
	judul.setAttribute('name','coba');
- mengetahui isi yg dimiliki sebuah atribut
	const a = document.querySelector('section#a a');
	//isi dari atribut menggunakan getAttribute
	a.getAttribute('href');
- untuk menghapus atribut
	a.removeAttribute('href');

4. Memanipulasi Class
- menambahkan class
	const p2 = document.querySelector('.p2')
	//dengan ini bukan menambahkan sebuah attribute melainkan mengganti atribut nya menjadi label
	p2.setAttribute('class','label');


element.classlist
- menambahkan class bernama label
	p2.classList.add('label');
- menghapus class dgn nama label
	p2.classList.remove('label');
- menambah jika blm ada true ,menghapus jika sudah ada maka false
	p2.classList.toggle('label');
- mengganti nama class dengan nama class baru 
	p2.classList.replace('namaawal','namabaru');



b. manipulasi node
memiliki beberapa method yaitu sebagai berikut
1. document.createElement() => membuat sebuah elemen
2. document.createTextNode() => menuliskan apa isi di element itu
3. node.appendChild() => memindahkan isi ke tempat seharusnya {simpan ke akhir dari sebuah element parent
4. node.insertBefore()
5. parentNode.removeChild() => menghapus
6. parentNode.replaceChild() => mengganti
dll...

implementasi
//DOM manipulasi
//menambahkan element baru=>menambahkan paragraf baru diposisi akhir
//1.buat element
const pBaru = document.createElement('p'); 
//2.tulisan didalam p
const textPBaru = document.createTextNode('Paragraf Baru');
//3.supaya tulisan/isi nya yg ditambahkan masukkan kedalam paragrafnya
//simpan tulisan ke dalam <p>
pBaru.appendChild(textPBaru);
//simpan pbaru diakhir seaction A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



//menambahkan element diposisi tengah
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item Baru');
liBaru.appendChild(textLiBaru);
//untuk menaruh ditengah-tengah
//perhatikan parent nya
const ul = document.querySelector('section#b ul');
// const li = document.querySelector('sectiom#b ul li:nth-child(2)');
//atau
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru,li2);

//menghapus
//remove link
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild('link');

//mengganti
//menganti tulisan paragraf 4 menjadi h2=>judul baru

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('judul baru!');
h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru,p4);


