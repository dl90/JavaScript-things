hotSwap(10, 1);
function hotSwap(a, b) {
  [a, b] = [b, a];
  console.log(a, b);
}

hotSwapArr([1, 2, 3, 4, 5]);
function hotSwapArr(arr) {
  [arr[2], arr[1]] = [arr[1], arr[2]];
  console.log(arr);
}

objDestructors({ a: 1, b: 2, c: 3 });
function objDestructors(obj) {
  const { c, b, a } = obj;
  console.log(a, b);
}

const obj = { a: "a", b: "b", c: "c" }
const { a: valA, b: valB, c: valC } = obj;
console.log(valA, valB, valC)

const func = ({ a = 1, b = 1 }) => {
  return a + b
}
console.log(func({ a: 90 }))


for (let val of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  if (val % 2 === 0) {
    continue
  }
  if (val / 3 === 1) {
    console.log("hi")
    break
  }
  console.log(val)
}