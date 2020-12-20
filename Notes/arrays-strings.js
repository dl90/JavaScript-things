
const str = '123334'
// console.log(arr.indexOf(3), str.indexOf(333));
// console.log(str.repeat(10));

const s = 'Hello!'
const t = s.padStart(10, ' ') // string '    Hello!'
const u = s.padEnd(10, ' '); // string 'Hello!    '
// Pad with leading zeroes
(12).toString(2).padStart(8, '0') // string '00001100'

let a = 'ABC'
let b = 123
// console.log(" this is a test for %s and it is %i", a, b);

/* spread operator on args turns multiple args to array !?!? */
function max (...numbers) {
  // numbers => [ 1, 2, 3, 4, 5 ]
  let result = -Infinity
  for (const number of numbers) {
    if (number > result) result = number
  }
  return result
}
console.log(max(1, 2, 3, 4, 5))

const x = 237
const xBinary = x.toString(2) // base 2
const xHex = x.toString(16) // base 16
const xBackToNum = parseInt(xBinary, 2)
console.log(xBinary, xHex, xBackToNum)

// for in
a = [10, 20, 30]
for (const i in a) console.log(i, a[i]) // i => index

b = { x: 77, y: 88, z: 99 }
for (const i in b) console.log(i, b[i]) // i => key

// regex
const pattern = /\d+/
const regex = new RegExp('\\d+')

// convert string to number
console.log(typeof +str)
