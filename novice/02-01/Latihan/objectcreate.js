const methodMahasiswa = {
        makan : function (porsi){
            this.energi += porsi;
            console.log("halo " + this.nama + " selamat makan!!" );
        },
        main : function (jam){
            this.energi -= jam;
            console.log("halo " + this.nama + " selamat bermain");
        }
    };
    function Mahasiswa(nama,energi){
        let mahasiswa = Object.create(methodMahasiswa)
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;
        
        return mahasiswa;
    }
    
    let mahasiswa1 = Mahasiswa ('Lutfiah',10);