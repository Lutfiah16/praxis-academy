let calculateSupply = function(usia,jmlhari){
    var maxusia = 100;
    var total = (maxusia - usia) * ( jmlhari * 365) ;
    var hasil = "Anda perlu memperlukan waktu " + jmlhari + " Hari " + "untuk menghabiskan umur selama " + maxusia + " Tahun";
    console.log(hasil);
  }

  calculateSupply(23 , 180);
  calculateSupply(23 , 500);
  calculateSupply(23 , 365);
