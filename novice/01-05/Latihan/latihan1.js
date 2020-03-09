function range(start, end){
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr.reduce((sum,value)=> sum + value,0); // untuk proses penjumlahan

}
range(1,10);
console.log(range(1,10))