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


const setRef = new Set([7, 11]).add(2)
console.log(setRef, setRef.size, setRef.has(3))

for (let i of setRef) {
  console.log(i)
}

setRef.clear()