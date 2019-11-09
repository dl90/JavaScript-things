//*****map*****
const arr1 = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990];
const age = arr1.map(element => 2019 - element);
console.log("array of age returned from .map():" + age);

//*****filter*****
const persons = [
    { name: "Peter", age: 16 },
    { name: "Mark", age: 18 },
    { name: "John", age: 27 },
    { name: "Jane", age: 14 },
    { name: "Tony", age: 24 }
];

let filteredArr = persons.filter( (obj) => obj.age > 18);
let filteredLetterArr = persons.filter( (obj) => obj.name.indexOf("J") != -1);
console.log(filteredArr);


//*****reduce*****
const arr2 = [5, 7, 1, 8, 2];

const sum = arr2.reduce( (accumulator, currentValue) => {
    console.log("accumulator: " +accumulator);
    console.log(currentValue + "!");
    return accumulator + currentValue;
}); //default value }, 1)
console.log("returned value from .reduce():" + sum);