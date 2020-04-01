Judul Materi : pengenalan vue.js

Nama : Lutfiah Atsari Sujud

Tanggal : 30 Maret 2020



- pengertian vue.js 

adalah sebuah library atau dapat dikatakan sebagai framework javascript biar website lebih interaktif
ada 2 keuntungan vue.js ini adalah 
1. reaktif data binding
2. langsung nyambung DOM asli nya

setiap aplikasi vue dimulai dengan membuat instance vue yaitu sbb :
        
        var app = new Vue ({
            //option
        });
               

vue instance dan property 
=> dapat menaruh data,method,tamplating

contoh :

        <div id ="app">
        {{nama}}
        </div>
        <script>
            new Vue({
                el :  '#app',
                data : {
                    nama : "Vue.js"
                }
            });
        </script>

atau :

        <div id ="app">
        {{nama}}
        </div>
        <script>
        var data ={
            nama : "pengenalan Vue.js"
        }
        new Vue({
            el :  '#app',
            data : data
        });
        </script>

a. Directive

=> Directive adalah atribut khusus yang diawali dengan v-. Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascript di dalam atribut.Tugas utama dari direktif sebenarnya untuk menerapkan ‘efek samping’ kepada DOM saat terjadi perubahan data pada ekspresinya.

1. Direktif Conditional Rendering

=> Direktif untuk coditional rendering akan kita butuhkan untuk menampilkan data tertentu yang berdasarkan kondisi.

Direktif ini terdiri dari:
v-if digunakan jika hanya ada satu kondisi;
v-else digunakan saat memiliki dua kondisi;
v-else-if digunakan jika memiliki banyak kondisi.

- v-if

cara penulisan 

        <div v-if>
        </div>

contoh :

        <div id ="app">
            <div v-if ="true">
            {{nama}}
            </div>
        </div>
        <script>
        var data ={
            nama : "pengenalan Vue.js"
        }
        new Vue({
            el :  '#app',
            data : data
        });
        </script>

    contoh diatas maka akan tampil jika v-if nya true ,jika false maka tidak akan menampilkan data nya

- v-else

cara penulisan

        <div v-else>
        </div>

untuk else tidak memerlukan persyaratan melainkan keterangan yang ingin ditampilkan jika tampilannya atau kondisi nya itu false


- v-show

mirip dengan v-if namun memiliki perbedaan yaitu saat keadaan nya false maka keterangan nya akan tampil berupa css dan vshow itu memainkan css nya 
cara penulisan

        <div v-show>
        </div>

2. Direktif Perulangan

=> Direktif perulangan biasanya digunakan untuk nemapilkan banyak data seperti list.Direktif ini hanya terdiri dari v-for dan juga bisa dikombinasikan dengan v-if.

- v-for

=> untuk menampilkan daftar item menggunakan data dari array
contoh :

        <div id="app-4">
        <ol>
            <li v-for="todo in todos">
            {{ todo.text }}
            </li>
        </ol>
        </div>
        <script>
        var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
            ]
        }
        })
        </script>

3. Direktif untuk Event

=> Direktif ini digunakan untuk menangani event, misalnya saat sesuatu diklik, disentuh, di-scroll, dll.Direktif untuk event adalah v-on, atau bisa disingkat dengan simbol @ saja.

- v-on

=> Untuk memungkinkan pengguna berinteraksi dengan aplikasi Anda, kami dapat menggunakan v-on arahan untuk melampirkan pendengar acara yang memanggil metode pada instance Vue kami

contoh :

        <div id="app-5">
                    <p>{{ message }}</p>
                    <button v-on:click="reverseMessage">Reverse Message</button>
        </div>
        <script>
                    var app5 = new Vue({
                    el: '#app-5',
                    data: {
                    message: 'Hello Vue.js!'
                    },
                    methods: {
                    reverseMessage: function () {
                        this.message = this.message.split('').reverse().join('')
                    }
                    }
                })
        </script>
        


4. Direktif data binding

=> Direktif data binding adalah direktif yang bertugas untuk mem-binding data ke HTML. Berikut ini beberpa direktif yang sering digunakan untuk data binding:
 v-bind untuk binding data satu arah;
 v-model untuk binding data dua arah;
 v-html untuk menampilkan data HTML;
 v-text untuk menampilkan data dalam plain teks;
 v-once untuk menampilkan data satu kali (tidak di-render ulang meskipun data berubah).


- v-bind

=> adalah salah satu directive yang gunanya untuk menyambungkan attribute apa saja untuk elemen HTML-nya atau Direktif v-bind adalah direktif untuk memberitahu Vuejs, kalau kita ingin melakukan one way data binding
contoh :

        <div id="app-2">
        <span v-bind:title="message">
            Hover your mouse over me for a few seconds
            to see my dynamically bound title!
        </span>
        </div>
        <script>
        var app2 = new Vue({
        el: '#app-2',
        data: {
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
        })
        </script>

- v-model
=> adalah direktif untuk melakukan two way data binding.

contoh :

            <div id="app-6">
                <p>{{ message }}</p>
                <input v-model="message">
            </div>
            <script>
                var app6 = new Vue({
                el: '#app-6',
                data: {
                message: 'Hello Vue!'
                }
            })
            </script>