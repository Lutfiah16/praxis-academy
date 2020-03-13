let novels = [
    {name :'Hujan', halaman :450},
    {name : 'Ayat-ayat Cinta', halaman :20},
    {name : 'Ritik Sendu', halaman :15}
];

/* Imperative Pattern */
for (var i = 0; i < novels.length; i++) {
    novels[i].lastRead =  new Date();
  }
  /* Declarative Pattern */
  novels.map((novel)=> {
    novel.lastReadBy = 'saya';
    return novel;
  });
  console.log(novels);