// const people = [ a = { name: "jon", age: 16},
//                  b = { name: "jane", age: 19},
//                  c = { name: "josh", age: 20},
//                  d = { name: "joe", age: 18} ];

// const coffeeLovers = ["jon", "jane", "joe"];

// const ageAbove18 = people.filter( person =>  person.age >= 18);
// console.log(ageAbove18);

// const addCoffeeLoverProperty = ageAbove18.map( )

const people = [ { name: "John Doe", age: 16 },
                 { name: "Thomas Calls", age: 19 },
                 { name: "Liam Smith", age: 20 },
                 { name: "Jessy Pinkman", age: 18 }
                ];
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];

const ageAbove18 = (person) => person.age >= 18;

const addCoffeeLoverProperty = (person) => { 
    person.coffeeLover = coffeeLovers.includes(person.name);
    return person;
};

const ageReducer = (sum, person) => {
    let s = person.coffeeLover? sum + person.age: 0;
    return s;
}

const coffeeLoversAbove18 = people .filter(ageAbove18) .map(addCoffeeLoverProperty);

const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18 .reduce(ageReducer, 0);
 
console.log(totalAgeOfCoffeeLoversAbove18);


// dynamic naespace for objects
// const test = "test123"
// const test123 = { [`key${test}`]: 123 };
// console.log(test123);