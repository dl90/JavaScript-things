const arr = [1, 2, 3, 4];
const arr1 = arr.concat(..."abc");
// console.log(arr, arr1);

const str = "123334";
// console.log(arr.indexOf(3), str.indexOf(333));
// console.log(str.padStart(10, 'a')); // first arg is desired str length, second arg is whats used to pad
// console.log(str.repeat(10));

let s = "Hello!";
let t = s.padStart(10, ' '); // string '    Hello!'
let u = s.padEnd(10, ' '); // string 'Hello!    '
// Pad with leading zeroes
(12).toString(2).padStart(8, '0'); // string '00001100'

let a = "ABC";
let b = 123
// console.log(" thie is a test for %s and it is %i", a, b);

// *** rest parameters ***
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
// console.log(max(4, 1, 9, -2));

let numbers = [5, 1, 7];
// console.log(max(...numbers)); // spreads the array elements and calls the function for each element

// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"]);

let string = JSON.stringify({ squirrel: false, events: ["weekend"] }); // stringify turns obj to JSON string
// console.log(string);
// console.log(JSON.parse(string).events); // parse truns JSON string to obj values

let x = 237;
let x_binary = x.toString(2); // string '11101101' => base 2 representation
let x_hex = x.toString(16); // string 'ed' => base 16 representation
let x_backToNum = parseInt(x_binary, 2);
// console.log(x_backToNum);

let xx = 3.1415926535;
let y = xx.toFixed(2); // string '3.14' => 2 decimal place

// for in
a = [10, 20, 30]; // index
for (let i in a) {
  // console.log(i);
  // console.log(a[i]);
}

b = { 'x': 77, 'y': 88, 'z': 99 }; // key
for (let i in b) {
  // console.log(i);
  // console.log(b[i]);
}

// regex
const pattern = /\d+/;
const regex = new RegExp('\\d+');

// convert string to number
console.log(typeof +str)