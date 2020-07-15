/*
  unique key and value
  key and value in Map can be in any data type
  no keys when created (unlike objects => Object.prototype)
  order is preserved
  iterable

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

  performs better than object (depending on engine):
    intensive set() and get() ops
    large set of data, especially when keys are unknown until run time
    keys are the same type and values are the same type

  https://stackoverflow.com/questions/18541940/map-vs-object-in-javascript#:~:text=A%20Map%20is%20ordered%20and,A%20Map%20inherits%20from%20Map.
*/

/* MAP */
const ref = new Map([[1, 0], [true, 2]]);
ref.set("key1", "val1");
ref.set("key2", 2);

console.log(ref, ref.get("key2"), ref.size, ref.has("abc"))
console.log(ref.delete("key1"), ref)

for (let key of ref.keys()) {  // ref.values
  console.log(key, ref.get(key))
}

for (let [k, v] of ref.entries()) {
  console.log([k, v])
}

ref.clear();

var uniqueOccurrences = function (arr) {
  const cache = new Map();

  for (const ele of arr) cache.has(ele) ? cache.set(ele, cache.get(ele) + 1) : cache.set(ele, 1);
  const val = Array.from(cache.values());
  const set = new Set(val);
  return set.size == cache.size;
};

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))
console.log(uniqueOccurrences([4, 0, 2, -5, -4]))


/* SET */
const setRef = new Set([7, 11]).add(2)
console.log(setRef, setRef.size, setRef.has(3))

for (let i of setRef) {
  console.log(i)
}

setRef.clear()