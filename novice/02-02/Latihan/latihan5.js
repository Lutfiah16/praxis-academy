function Hewan (type) {
    this.type = type;
    this.color = 'unknown';
}

Hewan.prototype.getInformation = function() {
    return 'This ' + this.type + ' is ' + this.suara + '.';
}

let lime = new Hewan('Kucing');
console.log(lime.getInformation());

lime.suara = 'Meong';
console.log(lime.getInformation());