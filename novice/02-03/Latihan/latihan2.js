const angka = [1,2,3,4,6,7,10];

const Hasil = angka.filter(function(a){
    return a %2==0;
});
console.log(Hasil);
