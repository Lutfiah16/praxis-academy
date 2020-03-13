class Cat {
    constructor(name,lelah, lapar,kesepian ,senang) {
        this.name = name;
        this.lelah = lelah;
        this.lapar = lapar;
        this.kesepian = kesepian;
        this.senang = senang;
    }

    makan (porsi){
        this.lapar += porsi;
        return this.name + " telah kenyang";
    }
    tidur (jam){
        this.lelah -= jam;
        return this.name + " selesai tidur";
    }
    pet (happy){
        this.kesepian -= happy;
        if(this.kelelahan > 25){
            return this.name + " tidak bahagia";
        } else {
            return this.name + " tidak kesepian lagi"
        }
    }
}

 let cat1 = new Cat('Pussy',12,10,30,80);
 console.log(cat1.makan(9));
 console.log(cat1);
