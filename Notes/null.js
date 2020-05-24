// console.log(typeof null);
// console.log(Object === null);

// let str = 'abc'
// console.log(str.charAt(10) == null);
// console.log(str.charAt(10) == 0)

let obj = new Object()
obj.x = 'abc'
let x = obj
// console.log(obj === x)
// console.log(x.x)

// garbage collect
obj = null;
// console.log(x.x) // x still points to obj in memory
// console.log(obj)

x = null;
// console.log(x) // all references to obj in memory are removed => memory will be freed by Js engine

let func = new Function(['console.log(123 - 3)', 'console.log("b")', 'console.log("c")']);
// func()