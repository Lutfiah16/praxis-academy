Judul Materi : Pengenalan Vuejs lanjut(2)

Nama : Lutfiah Atsari Sujud

Tanggal : 04 April 2020



1. Reusability & Composition

- Mixins 

Mixins adalah sebuah cara yang fleksibel untuk mendistribusikan beberapa fungsi yang bisa dipakai di semua komponen Vue.Object pada mixin bisa berisi beberapa opsi di komponen. Ketika sebuah komponen menggunakan mixin, maka semua opsi yang ada di dalam mixin akan di “mix” (digabungkan) dengan opsi komponen itu sendiri.

Contoh:

        // mendefinisikan object mixin
        var myMixin = {
        created: function () {
            this.hello()
        },
        methods: {
            hello: function () {
            console.log('hai, ini mixin!')
            }
        }
        }

        // definisikan sebuah komponen yang menggunakan mixin
        var Component = Vue.extend({
        mixins: [myMixin]
        })

        var component = new Component() 

- Custom Directives

Selain kumpulan direktif standard (v-model dan v-show), Vue juga memperbolehkan Anda untuk mendaftarkan direktif kustom milik Anda. Perhatikan bahwa dalam Vue 2.0, bentuk utama dari penggunaan kembali dan abstraksi kode adalah komponen - namun mungkin ada kasus dimana Anda memerlukan akses DOM tingkat rendah pada elemen polos, dan di sini dimana direktif kustom akan tetap bermanfaat. Contoh fokus kepada elemen input

=> Hook Functions

Objek definisi direktif dapat menyediakan beberapa fungsi kait (semua opsional):

- bind: dipanggil hanya sekali, saat direktif partama kali terikat dengan elemen. Di sini Anda dapat melakukan pekerjaan pengaturan satu kali.

- inserted: dipanggil ketika elemen terikat telah dimasukkan ke dalam node induknya (ini hanya menjamin keberadaan node induknya, tidak harus dalam dokumen).

- update: dipanggil ketika komponen yang memuat VNode telah diperbarui, tetapi mungkin sebelum anak-anaknya diperbarui. Nilai direktif ini mungkin berubah atau mungkin tidak berubah, tetapi Anda dapat melewati pembaruan yang tidak perlu dengan membandingkan nilai saat ini dan lama (lihat di bawah ini pada argumen hook).

- componentUpdated: dipanggil setelah komponen yang memuat VNode dan VNodes anak-anaknya telah diperbarui.

- unbind: dipanggil hanya sekali, ketika direktif terlepas dari elemennya.

Kita akan menjelajahi argumen yang dioper ke kait ini (mis. el,binding, vnode, danoldVnode) di bagian berikutnya.


=> Directive Hook Arguments

Kait direktif dioper argumen ini:

- el: Elemen dimana direktif terikat. Ini dapat digunakan secara langsung untuk memanipulasi DOM.
- binding: Objek yang berisi properti berikut.
    - name: Nama direktif, tanpa awalan v-.
    - value: Nilai yang dioper ke direktif. Misalnya pada v-my-directive="1 + 1", nilainya akan menjadi 2.
    - oldValue: Nilai sebelumnya, hanya tersedia pada update dan componentUpdated. Tersedia apakah nilai telah berubah atau tidak.
    - expression: Ekspresi dari binding sebagai string. Misalnya pada v-my-directive="1 + 1", ekspresi akan menjadi "1 + 1".
    - arg: Argumen yang dioper ke direktif, jika ada. Misalnya pada v-my-directive:foo, argumen akan menjandi "foo".
    - modifiers: Objek yang memuat pengubah, jika ada. Misalnya pada v-my-directive.foo.bar, objek pengubah menjadi { foo: true, bar: true }.
- vnode: Node virtual yang dibuat oleh penyusun Vue. Lihat API VNode untuk detil lebih lengkap.
- oldVnode: Virtual node sebelumnya, hanya tersedia pada kait update dan componentUpdated.

=> Function Shorthand

Dalam banyak kasus, Anda mungkin menginginkan perilaku yang sama pada bind danupdate, tetapi tidak peduli dengan kait lainnya. Sebagai contoh:

        Vue.directive('color-swatch', function (el, binding) {
        el.style.backgroundColor = binding.value
        })

=> Object Literals

Jika direktif yang Anda perlukan memerlukan beberapa nilai, Anda dapat mengirimkan objek JavaScript literal. Ingat, direktif dapat mengambil ekspresi JavaScript yang valid.

        <div v-demo="{ color: 'white', text: 'hello!' }"></div>
        Vue.directive('demo', function (el, binding) {
        console.log(binding.value.color) // => "white"
        console.log(binding.value.text)  // => "hello!"
        })