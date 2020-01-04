const people = [{ name: 'John', age: 16 },
{ name: 'Joe', age: 19 },
{ name: 'Jane', age: 20 },
{ name: 'James', age: 18 }];

const coffeeLovers = ['John', 'Joe', 'Jane'];

let totaleAgeAbove18 = 0;

const ageAbove18 = people.filter((person) => person.age >= 18);
console.log(ageAbove18);
console.log();

const coffeeLoverProperty = (person) => {
  person.coffeelover = coffeeLovers.includes(person.name);
  return person;
};

//people.forEach(person => coffeeLoverProperty(person));
ageAbove18.map(person => coffeeLoverProperty(person))

console.log(people);
console.log();


const ageReducer = ageAbove18.reduce((accumulator, currentValue) => {
  console.log(currentValue);
  if (currentValue.coffeelover === true) {
    totaleAgeAbove18 = accumulator + currentValue.age;
  }
  return totaleAgeAbove18;
}, 0);

console.log();
console.log(totaleAgeAbove18);



// const people = [ { name: "John Doe", age: 16 },
//                  { name: "Thomas Calls", age: 19 },
//                  { name: "Liam Smith", age: 20 },
//                  { name: "Jessy Pinkman", age: 18 }
//                 ];
// const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];

// const ageAbove18 = (person) => person.age >= 18;

// const addCoffeeLoverProperty = (person) => { 
//     person.coffeeLover = coffeeLovers.includes(person.name);
//     return person;
// };

// const ageReducer = (sum, person) => {
//     let s = person.coffeeLover? sum + person.age: 0;
//     return s;
// }

// const coffeeLoversAbove18 = people .filter(ageAbove18) .map(addCoffeeLoverProperty);

// const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18 .reduce(ageReducer, 0);

// console.log(totalAgeOfCoffeeLoversAbove18);


// dynamic naespace for objects
// const test = "test123"
// const test123 = { [`key${test}`]: 123 };
// console.log(test123);