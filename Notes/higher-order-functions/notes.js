let result2 = null;
let input = 1

const double = (x) => x * 2;
const result1 = double(input);

const getClearance = (allowed) => (allowed ? 'Access granted' : 'Access denied');
if(result1 > 5) {
  result2 = getClearance(true);
} else {
  result2 = getClearance(false);
}

const sayHi = (str) => `Hi, ${str}!`;
const result = sayHi(result2);
console.log(result);

const isEven = (num) => num % 2 === 0;
const even = [1, 2, 3, 4].filter(isEven);
console.log(even);

const add = (x) => (y) => x + y;
addx = add(10);
console.log(addx.toString());
sum = addx(20);
console.log(sum);