
let [x, y] = [10, 20]
console.log(hotSwap(x, y))
function hotSwap (a, b) {
  return [a, b] = [b, a]
}

console.log(hotSwapArr([1, 2, 3, 4, 5]))
function hotSwapArr (arr) {
  [arr[2], arr[1]] = [arr[1], arr[2]]
  return arr
}

objDestructors({ a: 1, b: 2, c: 3 })
function objDestructors ({ c: z, b: y, a: x }) {
  console.log(x, y, z)
}

const func = ({ a = 1, b = 1 }) => a + b
console.log(func({ a: 90 }))
