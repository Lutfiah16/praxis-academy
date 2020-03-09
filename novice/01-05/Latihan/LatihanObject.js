let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {

  let sum = 0;
  for (let salary of Object.values(obj)) { // fo of itu untuk melooping 
    sum += salary;
  }

  return sum;
}


console.log( sumSalaries(salaries) );