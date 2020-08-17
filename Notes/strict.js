"use strict";

const obj = { x: 20, x: 40 }
console.log(obj.x)

// strict mode fails this due to duplicate parameter names
// function test(x, y, x) {
//   return x - y
// }
// console.log(test(1, 2, 3))

// nested strict mode within class
// class test {
//   "strict mode"
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
// }

// const instance = new test(1, 2)
// console.log(instance)