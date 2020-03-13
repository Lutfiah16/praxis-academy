let Meetups = [
    {nama : 'JS', isActive:true, members:450},
    {nama : 'Angular', isActive:true, members:900},
    {nama: 'Node', isActive:false,member :900}
];

let activeMeetups =[];
for (let i =0; i< Meetups.length; i++){
    let m = Meetups[i];
    if(m.isActive){
        activeMeetups.push(m);
    }
}
console.log(activeMeetups);

let activeMeetupsFP = [];
activeMeetupsFP = (Meetups.filter((m) => {
    return m.isActive;
}));
console.log(activeMeetupsFP);
