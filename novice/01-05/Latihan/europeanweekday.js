function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}
let date = new Date(2012, 0, 3);
console.log( getLocalDay(date) );