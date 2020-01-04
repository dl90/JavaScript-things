hotSwap(10, 1);
function hotSwap(a, b) {
  [a, b] = [b, a];
  console.log(a);
  console.log(b);
}

hotSwapArr([1, 2, 3, 4, 5]);
function hotSwapArr(arr) {
  [arr[2], arr[1]] = [arr[1], arr[2]];
  console.log(arr);
}

objDestructure({ a: 1, b: 2, c: 3 });
function objDestructure(obj) {
  // keys must be same
  const { c, b, a } = obj;

  console.log(a);
  console.log(b);
}
