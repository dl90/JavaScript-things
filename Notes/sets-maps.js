
/*
  Set

  unique value
  insertion not ordered (order not guaranteed)
  iterable (for of)
  dynamic (auto size increase/decrease)
  deletion and finding elements are much faster O(1) than arrays O(n)
*/
const set = new Set([7, 11]).add(2);
console.log("=====Set=====")
console.log(set, set.size, set.has(3));

set.delete(7);
console.log(set);
set.clear();

for (const val of set) console.log(val);
console.log("-------------\n")

/*
  Map

  unique key, any value
  key and value in Map can be in any data type
  no keys when created (unlike objects with => Object.prototype)
  order is preserved
  iterable
  pure data storage, optimized for data access

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

  performs better than object (depending on engine):
    intensive set() and get() ops
    large set of data, especially when keys are unknown until run time
    keys are the same type and values are the same type

  https://stackoverflow.com/questions/18541940/map-vs-object-in-javascript#:~:text=A%20Map%20is%20ordered%20and,A%20Map%20inherits%20from%20Map.
*/
const map = new Map([[1, 0], [true, 2]]);
map.set("key1", "val1");
map.set("key2", 2);

console.log("=====Map=====")
console.log(map, map.get("key2"), map.size, map.has("abc"))
console.log(map.delete("key1"), map)

for (let key of map.keys()) {  // map.values()
  console.log(key, map.get(key))
}

for (let [k, v] of map.entries()) {
  console.log([k, v])
}

console.log("-------------\n")
map.clear();

/*
  WeakSet

  weakly referenced unique values (mush be object type)
  not enumerable/iterable (no .entries .keys .values)

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
*/
const weakSet = new WeakSet;
let objA = {};
let objB = {};
let objC = {};

weakSet.add(objA);
weakSet.add(objB);
weakSet.add(objB);
weakSet.add(objC);
objA = null;

console.log("=====WeakSet=====")
console.log(weakSet.has(objA), weakSet.has(objB), weakSet.has(objC))
console.log("-------------\n")

/*
  WeakMap

  weakly referenced key (mush be object type) mapped to a value
  not enumerable/iterable (no .entries .keys .values)
  garbage collection can clean up any weak-mapped entries if no longer referenced
  space advantage with automatic cleanup

  https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
*/
const weakMap = new WeakMap;
let obj1 = {};
let obj2 = {};
let obj3 = {};

weakMap.set(obj1, 1);
weakMap.set(obj2, 2);
weakMap.set(obj3, 3);

obj1 = null;
console.log("=====WeakMap=====")
console.log(weakMap.get(obj1), weakMap.get(obj2), weakMap.get(obj3));
console.log("-------------\n")
