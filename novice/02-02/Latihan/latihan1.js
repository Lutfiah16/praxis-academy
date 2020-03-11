function Mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return "halo " + this.nama + " selamat makan";
}
let mahasiswa1 = new Mahasiswa ('Lutfiah',10);

console.log(mahasiswa1.makan(80));
console.log(mahasiswa1);